import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cxo")
export default class CxoController {
  @operation({
    summary: "Get Cxo",
  })
  @get()
  static getCxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cxo",
  })
  @post("{id}")
  static createCxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
