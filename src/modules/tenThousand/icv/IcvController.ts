import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icv")
export default class IcvController {
  @operation({
    summary: "Get Icv",
  })
  @get()
  static getIcv = procedure({
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
