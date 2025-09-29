import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eips")
export default class EipController {
  @operation({
    summary: "Get Eips",
  })
  @get()
  static getEips = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eip",
  })
  @post("{id}")
  static createEip = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
