import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjfs")
export default class BjfController {
  @operation({
    summary: "Get Bjfs",
  })
  @get()
  static getBjfs = procedure({
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
