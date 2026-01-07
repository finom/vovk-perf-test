import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnb")
export default class GnbController {
  @operation({
    summary: "Get Gnb",
  })
  @get()
  static getGnb = procedure({
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
