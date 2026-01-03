import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgms")
export default class KgmController {
  @operation({
    summary: "Get Kgms",
  })
  @get()
  static getKgms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgm",
  })
  @post("{id}")
  static createKgm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
