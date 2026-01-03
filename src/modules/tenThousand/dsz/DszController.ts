import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dszs")
export default class DszController {
  @operation({
    summary: "Get Dszs",
  })
  @get()
  static getDszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsz",
  })
  @post("{id}")
  static createDsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
