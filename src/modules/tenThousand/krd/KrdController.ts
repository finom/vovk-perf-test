import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krds")
export default class KrdController {
  @operation({
    summary: "Get Krds",
  })
  @get()
  static getKrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Krd",
  })
  @post("{id}")
  static createKrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
