import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyl")
export default class GylController {
  @operation({
    summary: "Get Gyl",
  })
  @get()
  static getGyl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyl",
  })
  @post("{id}")
  static createGyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
