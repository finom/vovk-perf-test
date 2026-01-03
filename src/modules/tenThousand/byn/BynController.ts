import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byns")
export default class BynController {
  @operation({
    summary: "Get Byns",
  })
  @get()
  static getByns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byn",
  })
  @post("{id}")
  static createByn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
