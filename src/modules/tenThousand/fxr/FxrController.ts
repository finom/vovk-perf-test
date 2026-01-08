import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxr")
export default class FxrController {
  @operation({
    summary: "Get Fxr",
  })
  @get()
  static getFxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxr",
  })
  @post("{id}")
  static createFxr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
