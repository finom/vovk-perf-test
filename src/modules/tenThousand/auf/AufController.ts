import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auf")
export default class AufController {
  @operation({
    summary: "Get Auf",
  })
  @get()
  static getAuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Auf",
  })
  @post("{id}")
  static createAuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
