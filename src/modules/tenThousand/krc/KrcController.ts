import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krc")
export default class KrcController {
  @operation({
    summary: "Get Krc",
  })
  @get()
  static getKrc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krc",
  })
  @post("{id}")
  static createKrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
