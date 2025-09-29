import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bats")
export default class BatController {
  @operation({
    summary: "Get Bats",
  })
  @get()
  static getBats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bat",
  })
  @post("{id}")
  static createBat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
