import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzis")
export default class MziController {
  @operation({
    summary: "Get Mzis",
  })
  @get()
  static getMzis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzi",
  })
  @post("{id}")
  static createMzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
