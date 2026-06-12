import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ixo")
export default class IxoController {
  @operation({
    summary: "Get Ixo",
  })
  @get()
  static getIxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ixo",
  })
  @post("{id}")
  static createIxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
