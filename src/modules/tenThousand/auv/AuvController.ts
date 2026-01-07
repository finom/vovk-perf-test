import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auv")
export default class AuvController {
  @operation({
    summary: "Get Auv",
  })
  @get()
  static getAuv = procedure({
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
