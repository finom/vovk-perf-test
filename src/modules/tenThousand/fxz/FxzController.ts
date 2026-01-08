import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxz")
export default class FxzController {
  @operation({
    summary: "Get Fxz",
  })
  @get()
  static getFxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxz",
  })
  @post("{id}")
  static createFxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
