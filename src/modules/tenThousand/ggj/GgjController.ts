import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggj")
export default class GgjController {
  @operation({
    summary: "Get Ggj",
  })
  @get()
  static getGgj = procedure({
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
