import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gijs")
export default class GijController {
  @operation({
    summary: "Get Gijs",
  })
  @get()
  static getGijs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gij",
  })
  @post("{id}")
  static createGij = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
