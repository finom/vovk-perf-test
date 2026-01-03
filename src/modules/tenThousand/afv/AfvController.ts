import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afvs")
export default class AfvController {
  @operation({
    summary: "Get Afvs",
  })
  @get()
  static getAfvs = procedure({
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
