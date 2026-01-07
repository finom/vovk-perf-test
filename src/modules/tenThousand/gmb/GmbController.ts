import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmb")
export default class GmbController {
  @operation({
    summary: "Get Gmb",
  })
  @get()
  static getGmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmb",
  })
  @post("{id}")
  static createGmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
