import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwq")
export default class GwqController {
  @operation({
    summary: "Get Gwq",
  })
  @get()
  static getGwq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwq",
  })
  @post("{id}")
  static createGwq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
