import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evjs")
export default class EvjController {
  @operation({
    summary: "Get Evjs",
  })
  @get()
  static getEvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evj",
  })
  @post("{id}")
  static createEvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
