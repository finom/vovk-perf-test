import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihks")
export default class IhkController {
  @operation({
    summary: "Get Ihks",
  })
  @get()
  static getIhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ihk",
  })
  @post("{id}")
  static createIhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
