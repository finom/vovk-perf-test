import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byn")
export default class BynController {
  @operation({
    summary: "Get Byn",
  })
  @get()
  static getByn = procedure({
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
