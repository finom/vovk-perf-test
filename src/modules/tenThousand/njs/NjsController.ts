import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njs")
export default class NjsController {
  @operation({
    summary: "Get Njs",
  })
  @get()
  static getNjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njs",
  })
  @post("{id}")
  static createNjs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
