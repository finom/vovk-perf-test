import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxh")
export default class FxhController {
  @operation({
    summary: "Get Fxh",
  })
  @get()
  static getFxh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxh",
  })
  @post("{id}")
  static createFxh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
