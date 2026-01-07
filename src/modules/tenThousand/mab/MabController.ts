import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mab")
export default class MabController {
  @operation({
    summary: "Get Mab",
  })
  @get()
  static getMab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mab",
  })
  @post("{id}")
  static createMab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
