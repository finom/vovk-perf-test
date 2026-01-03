import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbvs")
export default class GbvController {
  @operation({
    summary: "Get Gbvs",
  })
  @get()
  static getGbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbv",
  })
  @post("{id}")
  static createGbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
