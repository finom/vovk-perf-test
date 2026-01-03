import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaks")
export default class EakController {
  @operation({
    summary: "Get Eaks",
  })
  @get()
  static getEaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eak",
  })
  @post("{id}")
  static createEak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
