import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwas")
export default class CwaController {
  @operation({
    summary: "Get Cwas",
  })
  @get()
  static getCwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cwa",
  })
  @post("{id}")
  static createCwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
