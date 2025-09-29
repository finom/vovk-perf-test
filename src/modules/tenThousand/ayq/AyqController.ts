import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayqs")
export default class AyqController {
  @operation({
    summary: "Get Ayqs",
  })
  @get()
  static getAyqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayq",
  })
  @post("{id}")
  static createAyq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
