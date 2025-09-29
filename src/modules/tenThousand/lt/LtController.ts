import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lts")
export default class LtController {
  @operation({
    summary: "Get Lts",
  })
  @get()
  static getLts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lt",
  })
  @post("{id}")
  static createLt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
