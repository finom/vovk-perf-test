import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elq")
export default class ElqController {
  @operation({
    summary: "Get Elq",
  })
  @get()
  static getElq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elq",
  })
  @post("{id}")
  static createElq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
