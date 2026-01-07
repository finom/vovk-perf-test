import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bni")
export default class BniController {
  @operation({
    summary: "Get Bni",
  })
  @get()
  static getBni = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bni",
  })
  @post("{id}")
  static createBni = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
