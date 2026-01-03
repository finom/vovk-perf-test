import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkts")
export default class GktController {
  @operation({
    summary: "Get Gkts",
  })
  @get()
  static getGkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkt",
  })
  @post("{id}")
  static createGkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
