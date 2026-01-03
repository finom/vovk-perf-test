import { procedure, prefix, get, post, operation } from "vovk";

@prefix("navs")
export default class NavController {
  @operation({
    summary: "Get Navs",
  })
  @get()
  static getNavs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nav",
  })
  @post("{id}")
  static createNav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
