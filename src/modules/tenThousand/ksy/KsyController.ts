import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksies")
export default class KsyController {
  @operation({
    summary: "Get Ksies",
  })
  @get()
  static getKsies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksy",
  })
  @post("{id}")
  static createKsy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
