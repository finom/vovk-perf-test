import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfis")
export default class CfiController {
  @operation({
    summary: "Get Cfis",
  })
  @get()
  static getCfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfi",
  })
  @post("{id}")
  static createCfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
