import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnd")
export default class CndController {
  @operation({
    summary: "Get Cnd",
  })
  @get()
  static getCnd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnd",
  })
  @post("{id}")
  static createCnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
