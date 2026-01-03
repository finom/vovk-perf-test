import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjies")
export default class BjyController {
  @operation({
    summary: "Get Bjies",
  })
  @get()
  static getBjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjy",
  })
  @post("{id}")
  static createBjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
