import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyp")
export default class LypController {
  @operation({
    summary: "Get Lyp",
  })
  @get()
  static getLyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyp",
  })
  @post("{id}")
  static createLyp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
