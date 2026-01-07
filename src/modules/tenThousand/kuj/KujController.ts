import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kuj")
export default class KujController {
  @operation({
    summary: "Get Kuj",
  })
  @get()
  static getKuj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kuj",
  })
  @post("{id}")
  static createKuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
