import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxs")
export default class FxsController {
  @operation({
    summary: "Get Fxs",
  })
  @get()
  static getFxs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxs",
  })
  @post("{id}")
  static createFxs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
