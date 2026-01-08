import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyc")
export default class LycController {
  @operation({
    summary: "Get Lyc",
  })
  @get()
  static getLyc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyc",
  })
  @post("{id}")
  static createLyc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
