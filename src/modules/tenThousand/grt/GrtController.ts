import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grt")
export default class GrtController {
  @operation({
    summary: "Get Grt",
  })
  @get()
  static getGrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grt",
  })
  @post("{id}")
  static createGrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
