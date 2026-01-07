import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpi")
export default class GpiController {
  @operation({
    summary: "Get Gpi",
  })
  @get()
  static getGpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gpi",
  })
  @post("{id}")
  static createGpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
