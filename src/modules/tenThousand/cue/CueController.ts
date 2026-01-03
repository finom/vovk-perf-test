import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cues")
export default class CueController {
  @operation({
    summary: "Get Cues",
  })
  @get()
  static getCues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cue",
  })
  @post("{id}")
  static createCue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
