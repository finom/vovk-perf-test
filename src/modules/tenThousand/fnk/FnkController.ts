import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnks")
export default class FnkController {
  @operation({
    summary: "Get Fnks",
  })
  @get()
  static getFnks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnk",
  })
  @post("{id}")
  static createFnk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
