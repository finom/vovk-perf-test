import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aps")
export default class ApsController {
  @operation({
    summary: "Get Aps",
  })
  @get()
  static getAps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aps",
  })
  @post("{id}")
  static createAps = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
