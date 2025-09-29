import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsis")
export default class BsiController {
  @operation({
    summary: "Get Bsis",
  })
  @get()
  static getBsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bsi",
  })
  @post("{id}")
  static createBsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
