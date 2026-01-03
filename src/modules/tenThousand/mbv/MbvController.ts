import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mbvs")
export default class MbvController {
  @operation({
    summary: "Get Mbvs",
  })
  @get()
  static getMbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mbv",
  })
  @post("{id}")
  static createMbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
