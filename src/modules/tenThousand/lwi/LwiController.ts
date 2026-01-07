import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwi")
export default class LwiController {
  @operation({
    summary: "Get Lwi",
  })
  @get()
  static getLwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwi",
  })
  @post("{id}")
  static createLwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
