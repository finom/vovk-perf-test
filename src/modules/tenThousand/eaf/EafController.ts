import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eaf")
export default class EafController {
  @operation({
    summary: "Get Eaf",
  })
  @get()
  static getEaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eaf",
  })
  @post("{id}")
  static createEaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
