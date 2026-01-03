import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnbs")
export default class FnbController {
  @operation({
    summary: "Get Fnbs",
  })
  @get()
  static getFnbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnb",
  })
  @post("{id}")
  static createFnb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
