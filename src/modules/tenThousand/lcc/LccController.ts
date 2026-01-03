import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lccs")
export default class LccController {
  @operation({
    summary: "Get Lccs",
  })
  @get()
  static getLccs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcc",
  })
  @post("{id}")
  static createLcc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
