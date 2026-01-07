import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjk")
export default class BjkController {
  @operation({
    summary: "Get Bjk",
  })
  @get()
  static getBjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjk",
  })
  @post("{id}")
  static createBjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
