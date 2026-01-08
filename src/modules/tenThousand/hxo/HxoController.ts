import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxo")
export default class HxoController {
  @operation({
    summary: "Get Hxo",
  })
  @get()
  static getHxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxo",
  })
  @post("{id}")
  static createHxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
