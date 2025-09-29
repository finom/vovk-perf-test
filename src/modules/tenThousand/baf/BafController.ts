import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bafs")
export default class BafController {
  @operation({
    summary: "Get Bafs",
  })
  @get()
  static getBafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Baf",
  })
  @post("{id}")
  static createBaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
