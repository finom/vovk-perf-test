import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djs")
export default class DjController {
  @operation({
    summary: "Get Djs",
  })
  @get()
  static getDjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dj",
  })
  @post("{id}")
  static createDj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
