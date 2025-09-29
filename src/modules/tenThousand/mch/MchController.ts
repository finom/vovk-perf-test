import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mches")
export default class MchController {
  @operation({
    summary: "Get Mches",
  })
  @get()
  static getMches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mch",
  })
  @post("{id}")
  static createMch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
