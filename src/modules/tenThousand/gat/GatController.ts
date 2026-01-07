import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gat")
export default class GatController {
  @operation({
    summary: "Get Gat",
  })
  @get()
  static getGat = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gat",
  })
  @post("{id}")
  static createGat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
