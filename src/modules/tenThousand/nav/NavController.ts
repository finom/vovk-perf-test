import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nav")
export default class NavController {
  @operation({
    summary: "Get Nav",
  })
  @get()
  static getNav = procedure({
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
