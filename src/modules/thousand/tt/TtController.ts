import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tts")
export default class TtController {
  @operation({
    summary: "Get Tts",
  })
  @get()
  static getTts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tt",
  })
  @post("{id}")
  static createTt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
