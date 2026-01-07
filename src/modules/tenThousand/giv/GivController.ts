import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giv")
export default class GivController {
  @operation({
    summary: "Get Giv",
  })
  @get()
  static getGiv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Giv",
  })
  @post("{id}")
  static createGiv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
