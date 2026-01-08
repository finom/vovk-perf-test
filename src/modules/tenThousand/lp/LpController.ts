import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lp")
export default class LpController {
  @operation({
    summary: "Get Lp",
  })
  @get()
  static getLp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lp",
  })
  @post("{id}")
  static createLp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
