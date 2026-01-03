import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dtts")
export default class DttController {
  @operation({
    summary: "Get Dtts",
  })
  @get()
  static getDtts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dtt",
  })
  @post("{id}")
  static createDtt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
