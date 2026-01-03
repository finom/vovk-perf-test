import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beis")
export default class BeiController {
  @operation({
    summary: "Get Beis",
  })
  @get()
  static getBeis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bei",
  })
  @post("{id}")
  static createBei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
