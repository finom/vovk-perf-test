import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnks")
export default class CnkController {
  @operation({
    summary: "Get Cnks",
  })
  @get()
  static getCnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnk",
  })
  @post("{id}")
  static createCnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
