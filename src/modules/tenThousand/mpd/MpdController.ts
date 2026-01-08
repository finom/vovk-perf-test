import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpd")
export default class MpdController {
  @operation({
    summary: "Get Mpd",
  })
  @get()
  static getMpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpd",
  })
  @post("{id}")
  static createMpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
