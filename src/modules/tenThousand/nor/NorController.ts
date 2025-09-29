import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nors")
export default class NorController {
  @operation({
    summary: "Get Nors",
  })
  @get()
  static getNors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nor",
  })
  @post("{id}")
  static createNor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
