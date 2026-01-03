import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sgs")
export default class SgController {
  @operation({
    summary: "Get Sgs",
  })
  @get()
  static getSgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sg",
  })
  @post("{id}")
  static createSg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
