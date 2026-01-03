import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kixes")
export default class KixController {
  @operation({
    summary: "Get Kixes",
  })
  @get()
  static getKixes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kix",
  })
  @post("{id}")
  static createKix = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
