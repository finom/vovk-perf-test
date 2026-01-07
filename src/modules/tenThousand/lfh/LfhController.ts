import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfh")
export default class LfhController {
  @operation({
    summary: "Get Lfh",
  })
  @get()
  static getLfh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfh",
  })
  @post("{id}")
  static createLfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
