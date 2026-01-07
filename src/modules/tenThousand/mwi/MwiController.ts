import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwi")
export default class MwiController {
  @operation({
    summary: "Get Mwi",
  })
  @get()
  static getMwi = procedure({
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
