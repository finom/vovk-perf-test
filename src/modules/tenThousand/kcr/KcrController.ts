import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcr")
export default class KcrController {
  @operation({
    summary: "Get Kcr",
  })
  @get()
  static getKcr = procedure({
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
