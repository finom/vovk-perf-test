import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmjs")
export default class GmjController {
  @operation({
    summary: "Get Gmjs",
  })
  @get()
  static getGmjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmj",
  })
  @post("{id}")
  static createGmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
