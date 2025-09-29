import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ofs")
export default class OfController {
  @operation({
    summary: "Get Ofs",
  })
  @get()
  static getOfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Of",
  })
  @post("{id}")
  static createOf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
