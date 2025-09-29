import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ibus")
export default class IbuController {
  @operation({
    summary: "Get Ibus",
  })
  @get()
  static getIbus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ibu",
  })
  @post("{id}")
  static createIbu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
