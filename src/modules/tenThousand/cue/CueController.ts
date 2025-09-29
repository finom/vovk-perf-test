import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cues")
export default class CueController {
  @operation({
    summary: "Get Cues",
  })
  @get()
  static getCues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cue",
  })
  @post("{id}")
  static createCue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
