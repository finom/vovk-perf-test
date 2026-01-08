import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyf")
export default class LyfController {
  @operation({
    summary: "Get Lyf",
  })
  @get()
  static getLyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyf",
  })
  @post("{id}")
  static createLyf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
