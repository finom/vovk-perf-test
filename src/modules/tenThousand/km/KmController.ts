import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kms")
export default class KmController {
  @operation({
    summary: "Get Kms",
  })
  @get()
  static getKms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Km",
  })
  @post("{id}")
  static createKm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
