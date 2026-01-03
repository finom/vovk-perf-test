import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iszs")
export default class IszController {
  @operation({
    summary: "Get Iszs",
  })
  @get()
  static getIszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isz",
  })
  @post("{id}")
  static createIsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
