import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhv")
export default class NhvController {
  @operation({
    summary: "Get Nhv",
  })
  @get()
  static getNhv = procedure({
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
