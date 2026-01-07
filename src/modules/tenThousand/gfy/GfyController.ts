import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gfy")
export default class GfyController {
  @operation({
    summary: "Get Gfy",
  })
  @get()
  static getGfy = procedure({
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
