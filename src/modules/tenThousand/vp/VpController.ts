import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vp")
export default class VpController {
  @operation({
    summary: "Get Vp",
  })
  @get()
  static getVp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Vp",
  })
  @post("{id}")
  static createVp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
