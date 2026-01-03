import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmws")
export default class DmwController {
  @operation({
    summary: "Get Dmws",
  })
  @get()
  static getDmws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmw",
  })
  @post("{id}")
  static createDmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
