import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icm")
export default class IcmController {
  @operation({
    summary: "Get Icm",
  })
  @get()
  static getIcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icm",
  })
  @post("{id}")
  static createIcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
