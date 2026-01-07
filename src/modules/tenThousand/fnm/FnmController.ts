import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnm")
export default class FnmController {
  @operation({
    summary: "Get Fnm",
  })
  @get()
  static getFnm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnm",
  })
  @post("{id}")
  static createFnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
