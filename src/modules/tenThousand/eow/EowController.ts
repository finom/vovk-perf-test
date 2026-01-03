import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eows")
export default class EowController {
  @operation({
    summary: "Get Eows",
  })
  @get()
  static getEows = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eow",
  })
  @post("{id}")
  static createEow = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
