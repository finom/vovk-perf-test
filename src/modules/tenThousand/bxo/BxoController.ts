import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxo")
export default class BxoController {
  @operation({
    summary: "Get Bxo",
  })
  @get()
  static getBxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxo",
  })
  @post("{id}")
  static createBxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
