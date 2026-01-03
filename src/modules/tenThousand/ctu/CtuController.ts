import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctus")
export default class CtuController {
  @operation({
    summary: "Get Ctus",
  })
  @get()
  static getCtus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctu",
  })
  @post("{id}")
  static createCtu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
