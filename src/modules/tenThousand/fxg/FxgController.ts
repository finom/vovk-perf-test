import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxg")
export default class FxgController {
  @operation({
    summary: "Get Fxg",
  })
  @get()
  static getFxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxg",
  })
  @post("{id}")
  static createFxg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
