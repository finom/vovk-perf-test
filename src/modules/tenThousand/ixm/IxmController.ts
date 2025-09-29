import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixms")
export default class IxmController {
  @operation({
    summary: "Get Ixms",
  })
  @get()
  static getIxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixm",
  })
  @post("{id}")
  static createIxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
