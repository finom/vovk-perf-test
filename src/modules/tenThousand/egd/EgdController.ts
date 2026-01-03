import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egds")
export default class EgdController {
  @operation({
    summary: "Get Egds",
  })
  @get()
  static getEgds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egd",
  })
  @post("{id}")
  static createEgd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
