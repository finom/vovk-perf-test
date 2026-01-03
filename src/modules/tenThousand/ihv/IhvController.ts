import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihvs")
export default class IhvController {
  @operation({
    summary: "Get Ihvs",
  })
  @get()
  static getIhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihv",
  })
  @post("{id}")
  static createIhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
