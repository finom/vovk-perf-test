import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlms")
export default class HlmController {
  @operation({
    summary: "Get Hlms",
  })
  @get()
  static getHlms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlm",
  })
  @post("{id}")
  static createHlm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
