import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dzies")
export default class DzyController {
  @operation({
    summary: "Get Dzies",
  })
  @get()
  static getDzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dzy",
  })
  @post("{id}")
  static createDzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
