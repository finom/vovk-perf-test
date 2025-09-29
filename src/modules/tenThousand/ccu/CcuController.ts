import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccus")
export default class CcuController {
  @operation({
    summary: "Get Ccus",
  })
  @get()
  static getCcus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccu",
  })
  @post("{id}")
  static createCcu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
