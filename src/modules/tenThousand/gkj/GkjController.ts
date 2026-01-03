import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkjs")
export default class GkjController {
  @operation({
    summary: "Get Gkjs",
  })
  @get()
  static getGkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkj",
  })
  @post("{id}")
  static createGkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
