import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gizs")
export default class GizController {
  @operation({
    summary: "Get Gizs",
  })
  @get()
  static getGizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Giz",
  })
  @post("{id}")
  static createGiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
