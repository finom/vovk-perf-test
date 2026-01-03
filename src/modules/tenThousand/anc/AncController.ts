import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ancs")
export default class AncController {
  @operation({
    summary: "Get Ancs",
  })
  @get()
  static getAncs = procedure({
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
