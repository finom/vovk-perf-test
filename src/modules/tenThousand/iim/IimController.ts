import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iims")
export default class IimController {
  @operation({
    summary: "Get Iims",
  })
  @get()
  static getIims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iim",
  })
  @post("{id}")
  static createIim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
