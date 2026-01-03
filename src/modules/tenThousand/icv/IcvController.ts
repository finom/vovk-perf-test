import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icvs")
export default class IcvController {
  @operation({
    summary: "Get Icvs",
  })
  @get()
  static getIcvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icv",
  })
  @post("{id}")
  static createIcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
