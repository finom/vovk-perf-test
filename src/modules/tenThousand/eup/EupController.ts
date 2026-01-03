import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eups")
export default class EupController {
  @operation({
    summary: "Get Eups",
  })
  @get()
  static getEups = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eup",
  })
  @post("{id}")
  static createEup = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
