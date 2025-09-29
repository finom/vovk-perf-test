import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("icds")
export default class IcdController {
  @operation({
    summary: "Get Icds",
  })
  @get()
  static getIcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Icd",
  })
  @post("{id}")
  static createIcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
