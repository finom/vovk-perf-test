import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csxes")
export default class CsxController {
  @operation({
    summary: "Get Csxes",
  })
  @get()
  static getCsxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csx",
  })
  @post("{id}")
  static createCsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
