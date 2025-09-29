import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iihs")
export default class IihController {
  @operation({
    summary: "Get Iihs",
  })
  @get()
  static getIihs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iih",
  })
  @post("{id}")
  static createIih = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
