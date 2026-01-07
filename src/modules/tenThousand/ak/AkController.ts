import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ak")
export default class AkController {
  @operation({
    summary: "Get Ak",
  })
  @get()
  static getAk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ak",
  })
  @post("{id}")
  static createAk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
