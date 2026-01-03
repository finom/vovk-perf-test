import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxjs")
export default class GxjController {
  @operation({
    summary: "Get Gxjs",
  })
  @get()
  static getGxjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxj",
  })
  @post("{id}")
  static createGxj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
