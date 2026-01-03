import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdis")
export default class CdiController {
  @operation({
    summary: "Get Cdis",
  })
  @get()
  static getCdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdi",
  })
  @post("{id}")
  static createCdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
