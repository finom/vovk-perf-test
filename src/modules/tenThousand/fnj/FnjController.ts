import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnj")
export default class FnjController {
  @operation({
    summary: "Get Fnj",
  })
  @get()
  static getFnj = procedure({
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
