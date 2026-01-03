import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewes")
export default class EweController {
  @operation({
    summary: "Get Ewes",
  })
  @get()
  static getEwes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewe",
  })
  @post("{id}")
  static createEwe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
