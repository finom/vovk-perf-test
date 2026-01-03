import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grs")
export default class GrsController {
  @operation({
    summary: "Get Grs",
  })
  @get()
  static getGrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grs",
  })
  @post("{id}")
  static createGrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
