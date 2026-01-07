import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgm")
export default class KgmController {
  @operation({
    summary: "Get Kgm",
  })
  @get()
  static getKgm = procedure({
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
