import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apts")
export default class AptController {
  @operation({
    summary: "Get Apts",
  })
  @get()
  static getApts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apt",
  })
  @post("{id}")
  static createApt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
