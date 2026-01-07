import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anc")
export default class AncController {
  @operation({
    summary: "Get Anc",
  })
  @get()
  static getAnc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Anc",
  })
  @post("{id}")
  static createAnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
