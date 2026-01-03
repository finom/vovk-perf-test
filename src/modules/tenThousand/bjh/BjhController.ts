import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjhs")
export default class BjhController {
  @operation({
    summary: "Get Bjhs",
  })
  @get()
  static getBjhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjh",
  })
  @post("{id}")
  static createBjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
