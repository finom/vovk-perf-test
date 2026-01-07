import { procedure, prefix, get, post, operation } from "vovk";

@prefix("buq")
export default class BuqController {
  @operation({
    summary: "Get Buq",
  })
  @get()
  static getBuq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Buq",
  })
  @post("{id}")
  static createBuq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
