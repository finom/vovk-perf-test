import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("diys")
export default class DiyController {
  @operation({
    summary: "Get Diys",
  })
  @get()
  static getDiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Diy",
  })
  @post("{id}")
  static createDiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
