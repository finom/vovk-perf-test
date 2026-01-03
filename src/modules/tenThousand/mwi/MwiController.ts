import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwis")
export default class MwiController {
  @operation({
    summary: "Get Mwis",
  })
  @get()
  static getMwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mwi",
  })
  @post("{id}")
  static createMwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
