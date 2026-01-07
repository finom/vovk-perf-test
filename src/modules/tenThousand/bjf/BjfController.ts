import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjf")
export default class BjfController {
  @operation({
    summary: "Get Bjf",
  })
  @get()
  static getBjf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjf",
  })
  @post("{id}")
  static createBjf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
