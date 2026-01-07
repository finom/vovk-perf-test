import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmr")
export default class GmrController {
  @operation({
    summary: "Get Gmr",
  })
  @get()
  static getGmr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmr",
  })
  @post("{id}")
  static createGmr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
