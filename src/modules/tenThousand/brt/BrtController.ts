import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brt")
export default class BrtController {
  @operation({
    summary: "Get Brt",
  })
  @get()
  static getBrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brt",
  })
  @post("{id}")
  static createBrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
