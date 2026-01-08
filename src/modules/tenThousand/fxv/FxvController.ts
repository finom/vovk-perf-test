import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxv")
export default class FxvController {
  @operation({
    summary: "Get Fxv",
  })
  @get()
  static getFxv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxv",
  })
  @post("{id}")
  static createFxv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
