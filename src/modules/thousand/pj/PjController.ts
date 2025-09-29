import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pjs")
export default class PjController {
  @operation({
    summary: "Get Pjs",
  })
  @get()
  static getPjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pj",
  })
  @post("{id}")
  static createPj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
