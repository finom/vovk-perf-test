import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhd")
export default class LhdController {
  @operation({
    summary: "Get Lhd",
  })
  @get()
  static getLhd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhd",
  })
  @post("{id}")
  static createLhd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
