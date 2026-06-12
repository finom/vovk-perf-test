import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ga")
export default class GaController {
  @operation({
    summary: "Get Ga",
  })
  @get()
  static getGa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ga",
  })
  @post("{id}")
  static createGa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
