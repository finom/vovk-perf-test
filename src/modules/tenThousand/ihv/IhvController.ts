import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihv")
export default class IhvController {
  @operation({
    summary: "Get Ihv",
  })
  @get()
  static getIhv = procedure({
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
