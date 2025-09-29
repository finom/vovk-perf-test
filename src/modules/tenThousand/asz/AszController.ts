import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aszs")
export default class AszController {
  @operation({
    summary: "Get Aszs",
  })
  @get()
  static getAszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asz",
  })
  @post("{id}")
  static createAsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
