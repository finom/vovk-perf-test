import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjds")
export default class BjdController {
  @operation({
    summary: "Get Bjds",
  })
  @get()
  static getBjds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjd",
  })
  @post("{id}")
  static createBjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
