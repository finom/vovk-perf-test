import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lif")
export default class LifController {
  @operation({
    summary: "Get Lif",
  })
  @get()
  static getLif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lif",
  })
  @post("{id}")
  static createLif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
