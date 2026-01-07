import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eml")
export default class EmlController {
  @operation({
    summary: "Get Eml",
  })
  @get()
  static getEml = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eml",
  })
  @post("{id}")
  static createEml = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
