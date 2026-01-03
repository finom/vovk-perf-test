import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjgs")
export default class BjgController {
  @operation({
    summary: "Get Bjgs",
  })
  @get()
  static getBjgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjg",
  })
  @post("{id}")
  static createBjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
