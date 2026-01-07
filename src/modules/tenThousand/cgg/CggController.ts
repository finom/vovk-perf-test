import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgg")
export default class CggController {
  @operation({
    summary: "Get Cgg",
  })
  @get()
  static getCgg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgg",
  })
  @post("{id}")
  static createCgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
