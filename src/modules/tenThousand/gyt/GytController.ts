import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyts")
export default class GytController {
  @operation({
    summary: "Get Gyts",
  })
  @get()
  static getGyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyt",
  })
  @post("{id}")
  static createGyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
