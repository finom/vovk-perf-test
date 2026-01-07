import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkm")
export default class GkmController {
  @operation({
    summary: "Get Gkm",
  })
  @get()
  static getGkm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkm",
  })
  @post("{id}")
  static createGkm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
