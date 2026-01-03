import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfies")
export default class GfyController {
  @operation({
    summary: "Get Gfies",
  })
  @get()
  static getGfies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gfy",
  })
  @post("{id}")
  static createGfy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
