import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mics")
export default class MicController {
  @operation({
    summary: "Get Mics",
  })
  @get()
  static getMics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mic",
  })
  @post("{id}")
  static createMic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
