import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxo")
export default class KxoController {
  @operation({
    summary: "Get Kxo",
  })
  @get()
  static getKxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxo",
  })
  @post("{id}")
  static createKxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
