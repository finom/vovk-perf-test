import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eays")
export default class EayController {
  @operation({
    summary: "Get Eays",
  })
  @get()
  static getEays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eay",
  })
  @post("{id}")
  static createEay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
