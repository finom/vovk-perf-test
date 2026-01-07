import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhp")
export default class NhpController {
  @operation({
    summary: "Get Nhp",
  })
  @get()
  static getNhp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhp",
  })
  @post("{id}")
  static createNhp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
