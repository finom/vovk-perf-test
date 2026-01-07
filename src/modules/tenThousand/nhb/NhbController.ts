import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhb")
export default class NhbController {
  @operation({
    summary: "Get Nhb",
  })
  @get()
  static getNhb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhb",
  })
  @post("{id}")
  static createNhb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
