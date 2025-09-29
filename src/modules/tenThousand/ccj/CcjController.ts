import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccjs")
export default class CcjController {
  @operation({
    summary: "Get Ccjs",
  })
  @get()
  static getCcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccj",
  })
  @post("{id}")
  static createCcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
