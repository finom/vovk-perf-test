import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwts")
export default class KwtController {
  @operation({
    summary: "Get Kwts",
  })
  @get()
  static getKwts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwt",
  })
  @post("{id}")
  static createKwt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
