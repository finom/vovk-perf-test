import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bezs")
export default class BezController {
  @operation({
    summary: "Get Bezs",
  })
  @get()
  static getBezs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bez",
  })
  @post("{id}")
  static createBez = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
