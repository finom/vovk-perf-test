import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fxj")
export default class FxjController {
  @operation({
    summary: "Get Fxj",
  })
  @get()
  static getFxj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fxj",
  })
  @post("{id}")
  static createFxj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
