import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuus")
export default class IuuController {
  @operation({
    summary: "Get Iuus",
  })
  @get()
  static getIuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuu",
  })
  @post("{id}")
  static createIuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
