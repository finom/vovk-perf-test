import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bth")
export default class BthController {
  @operation({
    summary: "Get Bth",
  })
  @get()
  static getBth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bth",
  })
  @post("{id}")
  static createBth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
