import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dches")
export default class DchController {
  @operation({
    summary: "Get Dches",
  })
  @get()
  static getDches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dch",
  })
  @post("{id}")
  static createDch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
