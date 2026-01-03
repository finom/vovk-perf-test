import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhvs")
export default class MhvController {
  @operation({
    summary: "Get Mhvs",
  })
  @get()
  static getMhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhv",
  })
  @post("{id}")
  static createMhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
