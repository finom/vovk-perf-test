import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baes")
export default class BaeController {
  @operation({
    summary: "Get Baes",
  })
  @get()
  static getBaes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bae",
  })
  @post("{id}")
  static createBae = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
