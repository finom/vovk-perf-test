import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gex")
export default class GexController {
  @operation({
    summary: "Get Gex",
  })
  @get()
  static getGex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gex",
  })
  @post("{id}")
  static createGex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
