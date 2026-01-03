import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhxes")
export default class NhxController {
  @operation({
    summary: "Get Nhxes",
  })
  @get()
  static getNhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhx",
  })
  @post("{id}")
  static createNhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
