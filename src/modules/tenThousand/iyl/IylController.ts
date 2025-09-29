import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iyls")
export default class IylController {
  @operation({
    summary: "Get Iyls",
  })
  @get()
  static getIyls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iyl",
  })
  @post("{id}")
  static createIyl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
