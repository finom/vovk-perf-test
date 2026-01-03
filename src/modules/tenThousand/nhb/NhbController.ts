import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhbs")
export default class NhbController {
  @operation({
    summary: "Get Nhbs",
  })
  @get()
  static getNhbs = procedure({
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
