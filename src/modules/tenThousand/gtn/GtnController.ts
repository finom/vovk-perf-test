import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtn")
export default class GtnController {
  @operation({
    summary: "Get Gtn",
  })
  @get()
  static getGtn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtn",
  })
  @post("{id}")
  static createGtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
