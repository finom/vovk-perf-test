import { procedure, prefix, get, post, operation } from "vovk";

@prefix("loks")
export default class LokController {
  @operation({
    summary: "Get Loks",
  })
  @get()
  static getLoks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lok",
  })
  @post("{id}")
  static createLok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
