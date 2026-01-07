import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijm")
export default class IjmController {
  @operation({
    summary: "Get Ijm",
  })
  @get()
  static getIjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ijm",
  })
  @post("{id}")
  static createIjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
