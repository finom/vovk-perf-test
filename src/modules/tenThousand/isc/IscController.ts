import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iscs")
export default class IscController {
  @operation({
    summary: "Get Iscs",
  })
  @get()
  static getIscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isc",
  })
  @post("{id}")
  static createIsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
