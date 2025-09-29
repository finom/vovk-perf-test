import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaqs")
export default class KaqController {
  @operation({
    summary: "Get Kaqs",
  })
  @get()
  static getKaqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kaq",
  })
  @post("{id}")
  static createKaq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
