import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkts")
export default class LktController {
  @operation({
    summary: "Get Lkts",
  })
  @get()
  static getLkts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkt",
  })
  @post("{id}")
  static createLkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
