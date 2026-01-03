import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guvs")
export default class GuvController {
  @operation({
    summary: "Get Guvs",
  })
  @get()
  static getGuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Guv",
  })
  @post("{id}")
  static createGuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
