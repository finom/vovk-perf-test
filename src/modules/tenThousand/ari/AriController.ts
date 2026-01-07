import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ari")
export default class AriController {
  @operation({
    summary: "Get Ari",
  })
  @get()
  static getAri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ari",
  })
  @post("{id}")
  static createAri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
