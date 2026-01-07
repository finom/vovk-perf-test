import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cac")
export default class CacController {
  @operation({
    summary: "Get Cac",
  })
  @get()
  static getCac = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cac",
  })
  @post("{id}")
  static createCac = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
