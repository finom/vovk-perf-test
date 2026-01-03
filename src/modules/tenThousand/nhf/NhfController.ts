import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nhfs")
export default class NhfController {
  @operation({
    summary: "Get Nhfs",
  })
  @get()
  static getNhfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nhf",
  })
  @post("{id}")
  static createNhf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
