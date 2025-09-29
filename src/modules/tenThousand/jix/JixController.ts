import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jixes")
export default class JixController {
  @operation({
    summary: "Get Jixes",
  })
  @get()
  static getJixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jix",
  })
  @post("{id}")
  static createJix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
