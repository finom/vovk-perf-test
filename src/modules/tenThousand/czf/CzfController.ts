import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czfs")
export default class CzfController {
  @operation({
    summary: "Get Czfs",
  })
  @get()
  static getCzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czf",
  })
  @post("{id}")
  static createCzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
