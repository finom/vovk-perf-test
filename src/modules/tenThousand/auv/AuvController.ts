import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auvs")
export default class AuvController {
  @operation({
    summary: "Get Auvs",
  })
  @get()
  static getAuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auv",
  })
  @post("{id}")
  static createAuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
