import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awas")
export default class AwaController {
  @operation({
    summary: "Get Awas",
  })
  @get()
  static getAwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Awa",
  })
  @post("{id}")
  static createAwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
