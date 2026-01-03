import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aks")
export default class AksController {
  @operation({
    summary: "Get Aks",
  })
  @get()
  static getAks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aks",
  })
  @post("{id}")
  static createAks = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
