import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bths")
export default class BthController {
  @operation({
    summary: "Get Bths",
  })
  @get()
  static getBths = procedure({
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
