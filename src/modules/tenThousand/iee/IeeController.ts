import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iees")
export default class IeeController {
  @operation({
    summary: "Get Iees",
  })
  @get()
  static getIees = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iee",
  })
  @post("{id}")
  static createIee = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
