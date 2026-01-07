import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cth")
export default class CthController {
  @operation({
    summary: "Get Cth",
  })
  @get()
  static getCth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cth",
  })
  @post("{id}")
  static createCth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
