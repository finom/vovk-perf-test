import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyq")
export default class LyqController {
  @operation({
    summary: "Get Lyq",
  })
  @get()
  static getLyq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyq",
  })
  @post("{id}")
  static createLyq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
