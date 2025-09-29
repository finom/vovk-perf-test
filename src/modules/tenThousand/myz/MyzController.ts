import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myzs")
export default class MyzController {
  @operation({
    summary: "Get Myzs",
  })
  @get()
  static getMyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myz",
  })
  @post("{id}")
  static createMyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
