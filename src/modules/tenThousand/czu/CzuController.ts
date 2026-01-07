import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czu")
export default class CzuController {
  @operation({
    summary: "Get Czu",
  })
  @get()
  static getCzu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czu",
  })
  @post("{id}")
  static createCzu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
