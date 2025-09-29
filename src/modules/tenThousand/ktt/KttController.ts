import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ktts")
export default class KttController {
  @operation({
    summary: "Get Ktts",
  })
  @get()
  static getKtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ktt",
  })
  @post("{id}")
  static createKtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
