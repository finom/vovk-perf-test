import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwis")
export default class IwiController {
  @operation({
    summary: "Get Iwis",
  })
  @get()
  static getIwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwi",
  })
  @post("{id}")
  static createIwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
