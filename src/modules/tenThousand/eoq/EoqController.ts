import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoqs")
export default class EoqController {
  @operation({
    summary: "Get Eoqs",
  })
  @get()
  static getEoqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoq",
  })
  @post("{id}")
  static createEoq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
