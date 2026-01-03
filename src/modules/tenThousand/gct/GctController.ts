import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcts")
export default class GctController {
  @operation({
    summary: "Get Gcts",
  })
  @get()
  static getGcts = procedure({
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
