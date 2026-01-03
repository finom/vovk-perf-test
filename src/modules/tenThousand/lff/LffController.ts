import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lffs")
export default class LffController {
  @operation({
    summary: "Get Lffs",
  })
  @get()
  static getLffs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lff",
  })
  @post("{id}")
  static createLff = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
