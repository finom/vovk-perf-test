import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhgs")
export default class NhgController {
  @operation({
    summary: "Get Nhgs",
  })
  @get()
  static getNhgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhg",
  })
  @post("{id}")
  static createNhg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
