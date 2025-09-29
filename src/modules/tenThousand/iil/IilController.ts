import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iils")
export default class IilController {
  @operation({
    summary: "Get Iils",
  })
  @get()
  static getIils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iil",
  })
  @post("{id}")
  static createIil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
