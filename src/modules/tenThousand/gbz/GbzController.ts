import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbzs")
export default class GbzController {
  @operation({
    summary: "Get Gbzs",
  })
  @get()
  static getGbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbz",
  })
  @post("{id}")
  static createGbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
