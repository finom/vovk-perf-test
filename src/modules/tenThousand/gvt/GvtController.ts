import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvt")
export default class GvtController {
  @operation({
    summary: "Get Gvt",
  })
  @get()
  static getGvt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvt",
  })
  @post("{id}")
  static createGvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
