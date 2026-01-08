import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpv")
export default class MpvController {
  @operation({
    summary: "Get Mpv",
  })
  @get()
  static getMpv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpv",
  })
  @post("{id}")
  static createMpv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
