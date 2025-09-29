import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kors")
export default class KorController {
  @operation({
    summary: "Get Kors",
  })
  @get()
  static getKors = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kor",
  })
  @post("{id}")
  static createKor = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
