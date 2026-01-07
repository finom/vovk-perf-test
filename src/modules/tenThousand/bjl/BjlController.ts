import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjl")
export default class BjlController {
  @operation({
    summary: "Get Bjl",
  })
  @get()
  static getBjl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjl",
  })
  @post("{id}")
  static createBjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
