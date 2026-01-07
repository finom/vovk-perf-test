import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhg")
export default class NhgController {
  @operation({
    summary: "Get Nhg",
  })
  @get()
  static getNhg = procedure({
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
