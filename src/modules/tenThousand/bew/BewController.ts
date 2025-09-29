import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bews")
export default class BewController {
  @operation({
    summary: "Get Bews",
  })
  @get()
  static getBews = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bew",
  })
  @post("{id}")
  static createBew = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
