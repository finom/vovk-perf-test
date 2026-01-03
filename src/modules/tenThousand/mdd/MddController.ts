import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdds")
export default class MddController {
  @operation({
    summary: "Get Mdds",
  })
  @get()
  static getMdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdd",
  })
  @post("{id}")
  static createMdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
