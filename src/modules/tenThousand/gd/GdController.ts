import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gd")
export default class GdController {
  @operation({
    summary: "Get Gd",
  })
  @get()
  static getGd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gd",
  })
  @post("{id}")
  static createGd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
