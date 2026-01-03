import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggjs")
export default class GgjController {
  @operation({
    summary: "Get Ggjs",
  })
  @get()
  static getGgjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggj",
  })
  @post("{id}")
  static createGgj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
