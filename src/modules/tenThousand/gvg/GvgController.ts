import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvg")
export default class GvgController {
  @operation({
    summary: "Get Gvg",
  })
  @get()
  static getGvg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvg",
  })
  @post("{id}")
  static createGvg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
