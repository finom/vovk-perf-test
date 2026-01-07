import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cik")
export default class CikController {
  @operation({
    summary: "Get Cik",
  })
  @get()
  static getCik = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cik",
  })
  @post("{id}")
  static createCik = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
