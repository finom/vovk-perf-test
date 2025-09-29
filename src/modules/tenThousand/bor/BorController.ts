import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bors")
export default class BorController {
  @operation({
    summary: "Get Bors",
  })
  @get()
  static getBors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bor",
  })
  @post("{id}")
  static createBor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
