import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iuvs")
export default class IuvController {
  @operation({
    summary: "Get Iuvs",
  })
  @get()
  static getIuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iuv",
  })
  @post("{id}")
  static createIuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
