import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhq")
export default class LhqController {
  @operation({
    summary: "Get Lhq",
  })
  @get()
  static getLhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhq",
  })
  @post("{id}")
  static createLhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
