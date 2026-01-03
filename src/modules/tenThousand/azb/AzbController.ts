import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azbs")
export default class AzbController {
  @operation({
    summary: "Get Azbs",
  })
  @get()
  static getAzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azb",
  })
  @post("{id}")
  static createAzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
