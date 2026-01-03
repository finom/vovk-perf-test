import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjms")
export default class BjmController {
  @operation({
    summary: "Get Bjms",
  })
  @get()
  static getBjms = procedure({
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
