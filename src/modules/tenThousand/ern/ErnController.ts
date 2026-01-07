import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ern")
export default class ErnController {
  @operation({
    summary: "Get Ern",
  })
  @get()
  static getErn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ern",
  })
  @post("{id}")
  static createErn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
