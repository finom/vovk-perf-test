import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjm")
export default class BjmController {
  @operation({
    summary: "Get Bjm",
  })
  @get()
  static getBjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjm",
  })
  @post("{id}")
  static createBjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
