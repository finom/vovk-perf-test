import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxxes")
export default class GxxController {
  @operation({
    summary: "Get Gxxes",
  })
  @get()
  static getGxxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxx",
  })
  @post("{id}")
  static createGxx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
