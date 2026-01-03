import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isjs")
export default class IsjController {
  @operation({
    summary: "Get Isjs",
  })
  @get()
  static getIsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isj",
  })
  @post("{id}")
  static createIsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
