import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuks")
export default class IukController {
  @operation({
    summary: "Get Iuks",
  })
  @get()
  static getIuks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuk",
  })
  @post("{id}")
  static createIuk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
