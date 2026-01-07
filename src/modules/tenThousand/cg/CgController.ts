import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cg")
export default class CgController {
  @operation({
    summary: "Get Cg",
  })
  @get()
  static getCg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cg",
  })
  @post("{id}")
  static createCg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
