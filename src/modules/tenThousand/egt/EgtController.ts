import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egts")
export default class EgtController {
  @operation({
    summary: "Get Egts",
  })
  @get()
  static getEgts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egt",
  })
  @post("{id}")
  static createEgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
