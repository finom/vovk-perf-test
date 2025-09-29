import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bols")
export default class BolController {
  @operation({
    summary: "Get Bols",
  })
  @get()
  static getBols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bol",
  })
  @post("{id}")
  static createBol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
