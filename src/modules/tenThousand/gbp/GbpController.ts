import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbp")
export default class GbpController {
  @operation({
    summary: "Get Gbp",
  })
  @get()
  static getGbp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbp",
  })
  @post("{id}")
  static createGbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
