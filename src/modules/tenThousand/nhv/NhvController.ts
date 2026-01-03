import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhvs")
export default class NhvController {
  @operation({
    summary: "Get Nhvs",
  })
  @get()
  static getNhvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhv",
  })
  @post("{id}")
  static createNhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
