import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcs")
export default class BcsController {
  @operation({
    summary: "Get Bcs",
  })
  @get()
  static getBcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcs",
  })
  @post("{id}")
  static createBcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
