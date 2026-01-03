import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjjs")
export default class BjjController {
  @operation({
    summary: "Get Bjjs",
  })
  @get()
  static getBjjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjj",
  })
  @post("{id}")
  static createBjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
