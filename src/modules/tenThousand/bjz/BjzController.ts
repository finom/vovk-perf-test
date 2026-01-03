import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjzs")
export default class BjzController {
  @operation({
    summary: "Get Bjzs",
  })
  @get()
  static getBjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjz",
  })
  @post("{id}")
  static createBjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
