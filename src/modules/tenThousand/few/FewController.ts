import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fews")
export default class FewController {
  @operation({
    summary: "Get Fews",
  })
  @get()
  static getFews = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Few",
  })
  @post("{id}")
  static createFew = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
