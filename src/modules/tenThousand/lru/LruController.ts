import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrus")
export default class LruController {
  @operation({
    summary: "Get Lrus",
  })
  @get()
  static getLrus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lru",
  })
  @post("{id}")
  static createLru = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
