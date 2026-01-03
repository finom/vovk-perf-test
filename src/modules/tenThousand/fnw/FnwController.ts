import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnws")
export default class FnwController {
  @operation({
    summary: "Get Fnws",
  })
  @get()
  static getFnws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnw",
  })
  @post("{id}")
  static createFnw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
