import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpts")
export default class MptController {
  @operation({
    summary: "Get Mpts",
  })
  @get()
  static getMpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpt",
  })
  @post("{id}")
  static createMpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
