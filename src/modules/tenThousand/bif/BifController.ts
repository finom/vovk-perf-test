import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bif")
export default class BifController {
  @operation({
    summary: "Get Bif",
  })
  @get()
  static getBif = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bif",
  })
  @post("{id}")
  static createBif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
