import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpes")
export default class KpeController {
  @operation({
    summary: "Get Kpes",
  })
  @get()
  static getKpes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpe",
  })
  @post("{id}")
  static createKpe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
