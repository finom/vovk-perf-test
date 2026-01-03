import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsses")
export default class GssController {
  @operation({
    summary: "Get Gsses",
  })
  @get()
  static getGsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gss",
  })
  @post("{id}")
  static createGss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
