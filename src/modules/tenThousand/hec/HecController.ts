import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hecs")
export default class HecController {
  @operation({
    summary: "Get Hecs",
  })
  @get()
  static getHecs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hec",
  })
  @post("{id}")
  static createHec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
