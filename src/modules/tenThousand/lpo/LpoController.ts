import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpos")
export default class LpoController {
  @operation({
    summary: "Get Lpos",
  })
  @get()
  static getLpos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpo",
  })
  @post("{id}")
  static createLpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
