import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjbs")
export default class BjbController {
  @operation({
    summary: "Get Bjbs",
  })
  @get()
  static getBjbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjb",
  })
  @post("{id}")
  static createBjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
