import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjg")
export default class CjgController {
  @operation({
    summary: "Get Cjg",
  })
  @get()
  static getCjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjg",
  })
  @post("{id}")
  static createCjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
