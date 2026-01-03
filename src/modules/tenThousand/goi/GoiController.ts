import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gois")
export default class GoiController {
  @operation({
    summary: "Get Gois",
  })
  @get()
  static getGois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Goi",
  })
  @post("{id}")
  static createGoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
