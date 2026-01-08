import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlw")
export default class MlwController {
  @operation({
    summary: "Get Mlw",
  })
  @get()
  static getMlw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlw",
  })
  @post("{id}")
  static createMlw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
