import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
