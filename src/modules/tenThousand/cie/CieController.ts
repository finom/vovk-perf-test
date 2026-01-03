import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cies")
export default class CieController {
  @operation({
    summary: "Get Cies",
  })
  @get()
  static getCies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cie",
  })
  @post("{id}")
  static createCie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
