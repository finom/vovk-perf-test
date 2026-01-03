import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhzs")
export default class NhzController {
  @operation({
    summary: "Get Nhzs",
  })
  @get()
  static getNhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhz",
  })
  @post("{id}")
  static createNhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
