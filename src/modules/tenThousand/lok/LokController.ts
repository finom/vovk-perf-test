import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lok")
export default class LokController {
  @operation({
    summary: "Get Lok",
  })
  @get()
  static getLok = procedure({
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
