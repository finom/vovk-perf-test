import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayc")
export default class AycController {
  @operation({
    summary: "Get Ayc",
  })
  @get()
  static getAyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayc",
  })
  @post("{id}")
  static createAyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
