import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ess")
export default class EssController {
  @operation({
    summary: "Get Ess",
  })
  @get()
  static getEss = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ess",
  })
  @post("{id}")
  static createEss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
