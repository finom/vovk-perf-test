import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhps")
export default class NhpController {
  @operation({
    summary: "Get Nhps",
  })
  @get()
  static getNhps = procedure({
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
