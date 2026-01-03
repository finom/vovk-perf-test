import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epos")
export default class EpoController {
  @operation({
    summary: "Get Epos",
  })
  @get()
  static getEpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epo",
  })
  @post("{id}")
  static createEpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
