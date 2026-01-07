import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfj")
export default class CfjController {
  @operation({
    summary: "Get Cfj",
  })
  @get()
  static getCfj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfj",
  })
  @post("{id}")
  static createCfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
