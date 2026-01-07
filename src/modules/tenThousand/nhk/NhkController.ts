import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhk")
export default class NhkController {
  @operation({
    summary: "Get Nhk",
  })
  @get()
  static getNhk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhk",
  })
  @post("{id}")
  static createNhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
