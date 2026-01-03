import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grs")
export default class GrController {
  @operation({
    summary: "Get Grs",
  })
  @get()
  static getGrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gr",
  })
  @post("{id}")
  static createGr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
