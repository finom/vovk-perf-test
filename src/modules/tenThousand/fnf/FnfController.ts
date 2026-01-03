import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnfs")
export default class FnfController {
  @operation({
    summary: "Get Fnfs",
  })
  @get()
  static getFnfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fnf",
  })
  @post("{id}")
  static createFnf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
