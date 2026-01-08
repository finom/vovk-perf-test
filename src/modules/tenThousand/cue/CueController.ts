import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cue")
export default class CueController {
  @operation({
    summary: "Get Cue",
  })
  @get()
  static getCue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cue",
  })
  @post("{id}")
  static createCue = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
