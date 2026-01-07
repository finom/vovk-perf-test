import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaf")
export default class AafController {
  @operation({
    summary: "Get Aaf",
  })
  @get()
  static getAaf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aaf",
  })
  @post("{id}")
  static createAaf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
