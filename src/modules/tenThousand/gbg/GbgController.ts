import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbgs")
export default class GbgController {
  @operation({
    summary: "Get Gbgs",
  })
  @get()
  static getGbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbg",
  })
  @post("{id}")
  static createGbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
