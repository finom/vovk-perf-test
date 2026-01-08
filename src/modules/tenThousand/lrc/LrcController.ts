import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrc")
export default class LrcController {
  @operation({
    summary: "Get Lrc",
  })
  @get()
  static getLrc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lrc",
  })
  @post("{id}")
  static createLrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
