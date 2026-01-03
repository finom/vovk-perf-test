import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmas")
export default class BmaController {
  @operation({
    summary: "Get Bmas",
  })
  @get()
  static getBmas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bma",
  })
  @post("{id}")
  static createBma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
