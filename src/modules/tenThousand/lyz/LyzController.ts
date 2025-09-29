import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyzs")
export default class LyzController {
  @operation({
    summary: "Get Lyzs",
  })
  @get()
  static getLyzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyz",
  })
  @post("{id}")
  static createLyz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
