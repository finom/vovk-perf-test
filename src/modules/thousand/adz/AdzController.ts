import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adz")
export default class AdzController {
  @operation({
    summary: "Get Adz",
  })
  @get()
  static getAdz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adz",
  })
  @post("{id}")
  static createAdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
