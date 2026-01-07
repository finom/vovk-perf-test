import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjp")
export default class BjpController {
  @operation({
    summary: "Get Bjp",
  })
  @get()
  static getBjp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjp",
  })
  @post("{id}")
  static createBjp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
