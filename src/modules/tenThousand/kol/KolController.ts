import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kols")
export default class KolController {
  @operation({
    summary: "Get Kols",
  })
  @get()
  static getKols = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kol",
  })
  @post("{id}")
  static createKol = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
