import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjo")
export default class BjoController {
  @operation({
    summary: "Get Bjo",
  })
  @get()
  static getBjo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjo",
  })
  @post("{id}")
  static createBjo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
