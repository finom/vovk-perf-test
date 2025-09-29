import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bars")
export default class BarController {
  @operation({
    summary: "Get Bars",
  })
  @get()
  static getBars = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bar",
  })
  @post("{id}")
  static createBar = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
