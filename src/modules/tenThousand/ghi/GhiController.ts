import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghi")
export default class GhiController {
  @operation({
    summary: "Get Ghi",
  })
  @get()
  static getGhi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghi",
  })
  @post("{id}")
  static createGhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
