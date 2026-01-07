import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwr")
export default class BwrController {
  @operation({
    summary: "Get Bwr",
  })
  @get()
  static getBwr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwr",
  })
  @post("{id}")
  static createBwr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
