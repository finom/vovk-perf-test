import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsps")
export default class GspController {
  @operation({
    summary: "Get Gsps",
  })
  @get()
  static getGsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsp",
  })
  @post("{id}")
  static createGsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
