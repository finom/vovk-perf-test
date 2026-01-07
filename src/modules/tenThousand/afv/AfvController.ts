import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afv")
export default class AfvController {
  @operation({
    summary: "Get Afv",
  })
  @get()
  static getAfv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afv",
  })
  @post("{id}")
  static createAfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
