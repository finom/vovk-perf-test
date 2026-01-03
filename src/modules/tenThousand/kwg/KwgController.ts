import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwgs")
export default class KwgController {
  @operation({
    summary: "Get Kwgs",
  })
  @get()
  static getKwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwg",
  })
  @post("{id}")
  static createKwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
