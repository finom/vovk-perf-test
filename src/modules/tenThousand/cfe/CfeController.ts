import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfes")
export default class CfeController {
  @operation({
    summary: "Get Cfes",
  })
  @get()
  static getCfes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfe",
  })
  @post("{id}")
  static createCfe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
