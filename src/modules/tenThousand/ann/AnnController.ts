import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anns")
export default class AnnController {
  @operation({
    summary: "Get Anns",
  })
  @get()
  static getAnns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ann",
  })
  @post("{id}")
  static createAnn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
