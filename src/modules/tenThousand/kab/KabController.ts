import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kab")
export default class KabController {
  @operation({
    summary: "Get Kab",
  })
  @get()
  static getKab = procedure({
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
