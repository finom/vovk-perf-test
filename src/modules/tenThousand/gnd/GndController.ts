import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnds")
export default class GndController {
  @operation({
    summary: "Get Gnds",
  })
  @get()
  static getGnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnd",
  })
  @post("{id}")
  static createGnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
