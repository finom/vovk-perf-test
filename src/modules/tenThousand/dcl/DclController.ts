import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dcls")
export default class DclController {
  @operation({
    summary: "Get Dcls",
  })
  @get()
  static getDcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dcl",
  })
  @post("{id}")
  static createDcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
