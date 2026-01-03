import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxis")
export default class GxiController {
  @operation({
    summary: "Get Gxis",
  })
  @get()
  static getGxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxi",
  })
  @post("{id}")
  static createGxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
