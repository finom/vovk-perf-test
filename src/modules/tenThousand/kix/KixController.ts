import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kix")
export default class KixController {
  @operation({
    summary: "Get Kix",
  })
  @get()
  static getKix = procedure({
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
