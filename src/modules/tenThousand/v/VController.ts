import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vs")
export default class VController {
  @operation({
    summary: "Get VS",
  })
  @get()
  static getVS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create V",
  })
  @post("{id}")
  static createV = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
