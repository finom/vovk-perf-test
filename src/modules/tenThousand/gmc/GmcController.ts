import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmc")
export default class GmcController {
  @operation({
    summary: "Get Gmc",
  })
  @get()
  static getGmc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmc",
  })
  @post("{id}")
  static createGmc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
