import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmls")
export default class GmlController {
  @operation({
    summary: "Get Gmls",
  })
  @get()
  static getGmls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gml",
  })
  @post("{id}")
  static createGml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
