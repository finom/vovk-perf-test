import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lyb")
export default class LybController {
  @operation({
    summary: "Get Lyb",
  })
  @get()
  static getLyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyb",
  })
  @post("{id}")
  static createLyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
