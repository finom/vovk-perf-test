import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmw")
export default class GmwController {
  @operation({
    summary: "Get Gmw",
  })
  @get()
  static getGmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmw",
  })
  @post("{id}")
  static createGmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
