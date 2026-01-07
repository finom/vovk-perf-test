import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lly")
export default class LlyController {
  @operation({
    summary: "Get Lly",
  })
  @get()
  static getLly = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lly",
  })
  @post("{id}")
  static createLly = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
