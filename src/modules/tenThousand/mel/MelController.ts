import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mels")
export default class MelController {
  @operation({
    summary: "Get Mels",
  })
  @get()
  static getMels = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mel",
  })
  @post("{id}")
  static createMel = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
