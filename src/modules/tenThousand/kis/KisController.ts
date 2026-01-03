import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kis")
export default class KisController {
  @operation({
    summary: "Get Kis",
  })
  @get()
  static getKis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kis",
  })
  @post("{id}")
  static createKis = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
