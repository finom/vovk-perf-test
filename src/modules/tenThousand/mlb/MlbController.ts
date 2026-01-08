import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlb")
export default class MlbController {
  @operation({
    summary: "Get Mlb",
  })
  @get()
  static getMlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlb",
  })
  @post("{id}")
  static createMlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
