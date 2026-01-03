import { procedure, prefix, get, post, operation } from "vovk";

@prefix("as")
export default class AsController {
  @operation({
    summary: "Get As",
  })
  @get()
  static getAs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create As",
  })
  @post("{id}")
  static createAs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
