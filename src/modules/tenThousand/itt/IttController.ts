import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itts")
export default class IttController {
  @operation({
    summary: "Get Itts",
  })
  @get()
  static getItts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itt",
  })
  @post("{id}")
  static createItt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
