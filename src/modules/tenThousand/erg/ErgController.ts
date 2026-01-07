import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erg")
export default class ErgController {
  @operation({
    summary: "Get Erg",
  })
  @get()
  static getErg = procedure({
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
