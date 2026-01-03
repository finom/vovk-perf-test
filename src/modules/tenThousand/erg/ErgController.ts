import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ergs")
export default class ErgController {
  @operation({
    summary: "Get Ergs",
  })
  @get()
  static getErgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erg",
  })
  @post("{id}")
  static createErg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
