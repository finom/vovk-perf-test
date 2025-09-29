import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imns")
export default class ImnController {
  @operation({
    summary: "Get Imns",
  })
  @get()
  static getImns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imn",
  })
  @post("{id}")
  static createImn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
