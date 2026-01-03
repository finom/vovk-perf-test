import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnjs")
export default class FnjController {
  @operation({
    summary: "Get Fnjs",
  })
  @get()
  static getFnjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnj",
  })
  @post("{id}")
  static createFnj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
