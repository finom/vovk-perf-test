import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gct")
export default class GctController {
  @operation({
    summary: "Get Gct",
  })
  @get()
  static getGct = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gct",
  })
  @post("{id}")
  static createGct = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
