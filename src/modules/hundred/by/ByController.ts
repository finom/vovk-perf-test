import { procedure, prefix, get, post, operation } from "vovk";

@prefix("by")
export default class ByController {
  @operation({
    summary: "Get By",
  })
  @get()
  static getBy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create By",
  })
  @post("{id}")
  static createBy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
