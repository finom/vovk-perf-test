import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asvs")
export default class AsvController {
  @operation({
    summary: "Get Asvs",
  })
  @get()
  static getAsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Asv",
  })
  @post("{id}")
  static createAsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
