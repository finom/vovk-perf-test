import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhcs")
export default class NhcController {
  @operation({
    summary: "Get Nhcs",
  })
  @get()
  static getNhcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhc",
  })
  @post("{id}")
  static createNhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
