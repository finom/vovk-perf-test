import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngr")
export default class NgrController {
  @operation({
    summary: "Get Ngr",
  })
  @get()
  static getNgr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ngr",
  })
  @post("{id}")
  static createNgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
