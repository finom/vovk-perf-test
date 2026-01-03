import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gns")
export default class GnsController {
  @operation({
    summary: "Get Gns",
  })
  @get()
  static getGns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gns",
  })
  @post("{id}")
  static createGns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
