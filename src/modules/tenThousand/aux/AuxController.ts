import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aux")
export default class AuxController {
  @operation({
    summary: "Get Aux",
  })
  @get()
  static getAux = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aux",
  })
  @post("{id}")
  static createAux = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
