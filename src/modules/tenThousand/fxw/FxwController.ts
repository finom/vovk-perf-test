import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxw")
export default class FxwController {
  @operation({
    summary: "Get Fxw",
  })
  @get()
  static getFxw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxw",
  })
  @post("{id}")
  static createFxw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
