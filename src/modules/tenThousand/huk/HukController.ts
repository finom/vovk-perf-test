import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huks")
export default class HukController {
  @operation({
    summary: "Get Huks",
  })
  @get()
  static getHuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huk",
  })
  @post("{id}")
  static createHuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
