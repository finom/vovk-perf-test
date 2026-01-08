import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlr")
export default class MlrController {
  @operation({
    summary: "Get Mlr",
  })
  @get()
  static getMlr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlr",
  })
  @post("{id}")
  static createMlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
