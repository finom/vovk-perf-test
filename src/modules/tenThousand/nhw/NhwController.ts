import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhws")
export default class NhwController {
  @operation({
    summary: "Get Nhws",
  })
  @get()
  static getNhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhw",
  })
  @post("{id}")
  static createNhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
