import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjws")
export default class BjwController {
  @operation({
    summary: "Get Bjws",
  })
  @get()
  static getBjws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjw",
  })
  @post("{id}")
  static createBjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
