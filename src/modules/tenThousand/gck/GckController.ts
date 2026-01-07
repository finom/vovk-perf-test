import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gck")
export default class GckController {
  @operation({
    summary: "Get Gck",
  })
  @get()
  static getGck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gck",
  })
  @post("{id}")
  static createGck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
