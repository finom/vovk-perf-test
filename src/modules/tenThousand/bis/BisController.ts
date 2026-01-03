import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bis")
export default class BisController {
  @operation({
    summary: "Get Bis",
  })
  @get()
  static getBis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bis",
  })
  @post("{id}")
  static createBis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
