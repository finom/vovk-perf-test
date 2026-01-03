import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gncs")
export default class GncController {
  @operation({
    summary: "Get Gncs",
  })
  @get()
  static getGncs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnc",
  })
  @post("{id}")
  static createGnc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
