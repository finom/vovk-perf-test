import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxus")
export default class GxuController {
  @operation({
    summary: "Get Gxus",
  })
  @get()
  static getGxus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxu",
  })
  @post("{id}")
  static createGxu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
