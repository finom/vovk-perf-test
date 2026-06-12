import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mxo")
export default class MxoController {
  @operation({
    summary: "Get Mxo",
  })
  @get()
  static getMxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mxo",
  })
  @post("{id}")
  static createMxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
