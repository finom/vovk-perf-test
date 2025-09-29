import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icbs")
export default class IcbController {
  @operation({
    summary: "Get Icbs",
  })
  @get()
  static getIcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icb",
  })
  @post("{id}")
  static createIcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
