import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kabs")
export default class KabController {
  @operation({
    summary: "Get Kabs",
  })
  @get()
  static getKabs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kab",
  })
  @post("{id}")
  static createKab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
