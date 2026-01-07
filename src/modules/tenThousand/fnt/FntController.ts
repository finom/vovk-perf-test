import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnt")
export default class FntController {
  @operation({
    summary: "Get Fnt",
  })
  @get()
  static getFnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnt",
  })
  @post("{id}")
  static createFnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
