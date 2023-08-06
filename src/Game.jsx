import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCallback, useState } from "react";
import elementDefs from "./ElementDefs";
import ll from "./l10n";

const zeroState = {amount: 0, increment: 0};

export const Game = () => {
    const [elStates, setElStates] = useState({});
    const onUpgrade = useCallback((id) => {
        setElStates((prev) => {
            return {...prev, [id]: upgradeElement(elStates[id]??zeroState)};
        });
    }, [elStates]);
    const rows = elementDefs;
    return (
        <Grid container spacing={1}>
            {rows.map((el) => (
                <ElementRow
                    key={el.id}
                    el={el}
                    elState={elStates[el.id]}
                    onUpgrade={onUpgrade}
                />
            ))}
        </Grid>
    );
};

const ElementRow = ({ el, elState, onUpgrade }) => {
    const stateStr = elState ? stateToString(elState) : "0";
    return (
        <>
            <Grid xs={1}>
                <Item>{el.id}</Item>
            </Grid>
            <Grid xs={2}>
                <Item>{el.name}</Item>
            </Grid>
            <Grid xs={2}>
                <Item>{stateStr}</Item>
            </Grid>
            <Grid xs={2}>
                <Button onClick={() => onUpgrade(el.id)}>{ll("Upgrade")}</Button>
            </Grid>
            <Grid xs={5}>
                <Item>Buttons etc</Item>
            </Grid>
        </>
    );
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function stateToString(elState) {
    return `${elState.amount}(${elState.increment})`;
}

function upgradeElement(elState) {
    return {...elState, increment: elState.increment + 1};
}