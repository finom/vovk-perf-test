import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjrs")
export default class BjrController {
  @operation({
    summary: "Get Bjrs",
  })
  @get()
  static getBjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjr",
  })
  @post("{id}")
  static createBjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
