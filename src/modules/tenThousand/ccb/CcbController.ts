import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccbs")
export default class CcbController {
  @operation({
    summary: "Get Ccbs",
  })
  @get()
  static getCcbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccb",
  })
  @post("{id}")
  static createCcb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
