import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpb")
export default class LpbController {
  @operation({
    summary: "Get Lpb",
  })
  @get()
  static getLpb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpb",
  })
  @post("{id}")
  static createLpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
