import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caus")
export default class CauController {
  @operation({
    summary: "Get Caus",
  })
  @get()
  static getCaus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cau",
  })
  @post("{id}")
  static createCau = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
