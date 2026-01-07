import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxn")
export default class CxnController {
  @operation({
    summary: "Get Cxn",
  })
  @get()
  static getCxn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxn",
  })
  @post("{id}")
  static createCxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
