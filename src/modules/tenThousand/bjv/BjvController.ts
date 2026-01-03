import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjvs")
export default class BjvController {
  @operation({
    summary: "Get Bjvs",
  })
  @get()
  static getBjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjv",
  })
  @post("{id}")
  static createBjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
