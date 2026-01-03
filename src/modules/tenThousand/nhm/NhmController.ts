import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhms")
export default class NhmController {
  @operation({
    summary: "Get Nhms",
  })
  @get()
  static getNhms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhm",
  })
  @post("{id}")
  static createNhm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
