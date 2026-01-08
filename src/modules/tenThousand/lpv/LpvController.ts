import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpv")
export default class LpvController {
  @operation({
    summary: "Get Lpv",
  })
  @get()
  static getLpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpv",
  })
  @post("{id}")
  static createLpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
