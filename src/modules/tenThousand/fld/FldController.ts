import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flds")
export default class FldController {
  @operation({
    summary: "Get Flds",
  })
  @get()
  static getFlds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fld",
  })
  @post("{id}")
  static createFld = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
