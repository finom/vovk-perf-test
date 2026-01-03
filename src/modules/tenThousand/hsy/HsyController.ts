import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsies")
export default class HsyController {
  @operation({
    summary: "Get Hsies",
  })
  @get()
  static getHsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsy",
  })
  @post("{id}")
  static createHsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
