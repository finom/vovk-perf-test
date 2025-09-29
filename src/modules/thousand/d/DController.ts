import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ds")
export default class DController {
  @operation({
    summary: "Get DS",
  })
  @get()
  static getDS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create D",
  })
  @post("{id}")
  static createD = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
