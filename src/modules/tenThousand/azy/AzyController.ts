import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azies")
export default class AzyController {
  @operation({
    summary: "Get Azies",
  })
  @get()
  static getAzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azy",
  })
  @post("{id}")
  static createAzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
