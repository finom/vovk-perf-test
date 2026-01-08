import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlz")
export default class MlzController {
  @operation({
    summary: "Get Mlz",
  })
  @get()
  static getMlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlz",
  })
  @post("{id}")
  static createMlz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
