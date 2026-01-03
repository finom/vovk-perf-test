import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhks")
export default class MhkController {
  @operation({
    summary: "Get Mhks",
  })
  @get()
  static getMhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhk",
  })
  @post("{id}")
  static createMhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
