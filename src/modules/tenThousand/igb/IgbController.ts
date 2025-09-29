import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("igbs")
export default class IgbController {
  @operation({
    summary: "Get Igbs",
  })
  @get()
  static getIgbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Igb",
  })
  @post("{id}")
  static createIgb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
