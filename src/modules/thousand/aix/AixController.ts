import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aixes")
export default class AixController {
  @operation({
    summary: "Get Aixes",
  })
  @get()
  static getAixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aix",
  })
  @post("{id}")
  static createAix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
