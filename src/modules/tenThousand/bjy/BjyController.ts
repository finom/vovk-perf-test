import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjy")
export default class BjyController {
  @operation({
    summary: "Get Bjy",
  })
  @get()
  static getBjy = procedure({
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
