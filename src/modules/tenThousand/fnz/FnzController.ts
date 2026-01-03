import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnzs")
export default class FnzController {
  @operation({
    summary: "Get Fnzs",
  })
  @get()
  static getFnzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnz",
  })
  @post("{id}")
  static createFnz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
