import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afr")
export default class AfrController {
  @operation({
    summary: "Get Afr",
  })
  @get()
  static getAfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afr",
  })
  @post("{id}")
  static createAfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
