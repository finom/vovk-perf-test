import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjx")
export default class BjxController {
  @operation({
    summary: "Get Bjx",
  })
  @get()
  static getBjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjx",
  })
  @post("{id}")
  static createBjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
