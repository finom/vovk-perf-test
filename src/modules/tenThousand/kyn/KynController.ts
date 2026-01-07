import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyn")
export default class KynController {
  @operation({
    summary: "Get Kyn",
  })
  @get()
  static getKyn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kyn",
  })
  @post("{id}")
  static createKyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
