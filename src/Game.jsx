import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import elements from "./Elements";

export const Game = () => {
    const rows = elements;
    return (
        <Grid container spacing={1}>
            {rows.map((el) => (
                <ElementRow key={el.id} el={el} />
            ))}
        </Grid>
    );
};

const ElementRow = ({ el }) => {
    return (
        <>
            <Grid xs={1}>
                <Item>{el.id}</Item>
            </Grid>
            <Grid xs={2}>
                <Item>{el.name}</Item>
            </Grid>
            <Grid xs={9}>
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
