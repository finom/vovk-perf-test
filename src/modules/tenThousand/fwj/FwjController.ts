import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwjs")
export default class FwjController {
  @operation({
    summary: "Get Fwjs",
  })
  @get()
  static getFwjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwj",
  })
  @post("{id}")
  static createFwj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
