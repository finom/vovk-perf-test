import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgu")
export default class CguController {
  @operation({
    summary: "Get Cgu",
  })
  @get()
  static getCgu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgu",
  })
  @post("{id}")
  static createCgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
