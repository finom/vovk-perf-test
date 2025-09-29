import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eles")
export default class EleController {
  @operation({
    summary: "Get Eles",
  })
  @get()
  static getEles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ele",
  })
  @post("{id}")
  static createEle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
