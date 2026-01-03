import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gses")
export default class GseController {
  @operation({
    summary: "Get Gses",
  })
  @get()
  static getGses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gse",
  })
  @post("{id}")
  static createGse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
