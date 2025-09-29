import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ois")
export default class OiController {
  @operation({
    summary: "Get Ois",
  })
  @get()
  static getOis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Oi",
  })
  @post("{id}")
  static createOi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
