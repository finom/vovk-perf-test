import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luvs")
export default class LuvController {
  @operation({
    summary: "Get Luvs",
  })
  @get()
  static getLuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luv",
  })
  @post("{id}")
  static createLuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
