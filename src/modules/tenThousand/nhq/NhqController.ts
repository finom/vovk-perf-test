import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhqs")
export default class NhqController {
  @operation({
    summary: "Get Nhqs",
  })
  @get()
  static getNhqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhq",
  })
  @post("{id}")
  static createNhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
