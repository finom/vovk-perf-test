import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afis")
export default class AfiController {
  @operation({
    summary: "Get Afis",
  })
  @get()
  static getAfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Afi",
  })
  @post("{id}")
  static createAfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
