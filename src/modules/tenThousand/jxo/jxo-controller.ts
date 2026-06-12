import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jxo")
export default class JxoController {
  @operation({
    summary: "Get Jxo",
  })
  @get()
  static getJxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jxo",
  })
  @post("{id}")
  static createJxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
