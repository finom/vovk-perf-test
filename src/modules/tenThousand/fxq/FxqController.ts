import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxq")
export default class FxqController {
  @operation({
    summary: "Get Fxq",
  })
  @get()
  static getFxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxq",
  })
  @post("{id}")
  static createFxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
