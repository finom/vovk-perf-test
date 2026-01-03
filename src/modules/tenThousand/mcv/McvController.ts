import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcvs")
export default class McvController {
  @operation({
    summary: "Get Mcvs",
  })
  @get()
  static getMcvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcv",
  })
  @post("{id}")
  static createMcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
