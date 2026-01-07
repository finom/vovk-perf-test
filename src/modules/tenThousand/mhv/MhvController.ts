import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhv")
export default class MhvController {
  @operation({
    summary: "Get Mhv",
  })
  @get()
  static getMhv = procedure({
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
