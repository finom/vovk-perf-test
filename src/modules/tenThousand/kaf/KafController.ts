import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kafs")
export default class KafController {
  @operation({
    summary: "Get Kafs",
  })
  @get()
  static getKafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kaf",
  })
  @post("{id}")
  static createKaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
