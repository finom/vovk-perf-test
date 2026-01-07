import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etg")
export default class EtgController {
  @operation({
    summary: "Get Etg",
  })
  @get()
  static getEtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Etg",
  })
  @post("{id}")
  static createEtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
