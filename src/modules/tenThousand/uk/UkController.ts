import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uks")
export default class UkController {
  @operation({
    summary: "Get Uks",
  })
  @get()
  static getUks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uk",
  })
  @post("{id}")
  static createUk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
