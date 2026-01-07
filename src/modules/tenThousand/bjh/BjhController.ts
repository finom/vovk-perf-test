import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjh")
export default class BjhController {
  @operation({
    summary: "Get Bjh",
  })
  @get()
  static getBjh = procedure({
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
