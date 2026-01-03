import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnbs")
export default class GnbController {
  @operation({
    summary: "Get Gnbs",
  })
  @get()
  static getGnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnb",
  })
  @post("{id}")
  static createGnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
