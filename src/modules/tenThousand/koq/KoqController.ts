import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("koqs")
export default class KoqController {
  @operation({
    summary: "Get Koqs",
  })
  @get()
  static getKoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koq",
  })
  @post("{id}")
  static createKoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
