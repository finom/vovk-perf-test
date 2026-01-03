import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnvs")
export default class DnvController {
  @operation({
    summary: "Get Dnvs",
  })
  @get()
  static getDnvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnv",
  })
  @post("{id}")
  static createDnv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
