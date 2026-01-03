import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyzs")
export default class GyzController {
  @operation({
    summary: "Get Gyzs",
  })
  @get()
  static getGyzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyz",
  })
  @post("{id}")
  static createGyz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
