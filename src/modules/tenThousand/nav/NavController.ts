import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("navs")
export default class NavController {
  @operation({
    summary: "Get Navs",
  })
  @get()
  static getNavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nav",
  })
  @post("{id}")
  static createNav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
