import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krhs")
export default class KrhController {
  @operation({
    summary: "Get Krhs",
  })
  @get()
  static getKrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krh",
  })
  @post("{id}")
  static createKrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
