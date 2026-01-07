import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjj")
export default class BjjController {
  @operation({
    summary: "Get Bjj",
  })
  @get()
  static getBjj = procedure({
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
