import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egm")
export default class EgmController {
  @operation({
    summary: "Get Egm",
  })
  @get()
  static getEgm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egm",
  })
  @post("{id}")
  static createEgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
