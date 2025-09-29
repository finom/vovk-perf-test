import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccks")
export default class CckController {
  @operation({
    summary: "Get Ccks",
  })
  @get()
  static getCcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cck",
  })
  @post("{id}")
  static createCck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
