import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnts")
export default class MntController {
  @operation({
    summary: "Get Mnts",
  })
  @get()
  static getMnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnt",
  })
  @post("{id}")
  static createMnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
