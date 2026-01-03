import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcrs")
export default class KcrController {
  @operation({
    summary: "Get Kcrs",
  })
  @get()
  static getKcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kcr",
  })
  @post("{id}")
  static createKcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
