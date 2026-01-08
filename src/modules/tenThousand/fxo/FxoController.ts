import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxo")
export default class FxoController {
  @operation({
    summary: "Get Fxo",
  })
  @get()
  static getFxo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxo",
  })
  @post("{id}")
  static createFxo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
