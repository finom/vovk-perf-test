import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnc")
export default class GncController {
  @operation({
    summary: "Get Gnc",
  })
  @get()
  static getGnc = procedure({
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
