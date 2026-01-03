import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auds")
export default class AudController {
  @operation({
    summary: "Get Auds",
  })
  @get()
  static getAuds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aud",
  })
  @post("{id}")
  static createAud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
