import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lxo")
export default class LxoController {
  @operation({
    summary: "Get Lxo",
  })
  @get()
  static getLxo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lxo",
  })
  @post("{id}")
  static createLxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
