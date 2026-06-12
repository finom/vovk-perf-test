import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gas")
export default class GasController {
  @operation({
    summary: "Get Gas",
  })
  @get()
  static getGas = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gas",
  })
  @post("{id}")
  static createGas = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
