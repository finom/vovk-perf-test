import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elgs")
export default class ElgController {
  @operation({
    summary: "Get Elgs",
  })
  @get()
  static getElgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Elg",
  })
  @post("{id}")
  static createElg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
