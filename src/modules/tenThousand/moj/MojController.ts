import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mojs")
export default class MojController {
  @operation({
    summary: "Get Mojs",
  })
  @get()
  static getMojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Moj",
  })
  @post("{id}")
  static createMoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
