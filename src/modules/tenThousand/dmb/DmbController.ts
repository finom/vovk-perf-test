import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmb")
export default class DmbController {
  @operation({
    summary: "Get Dmb",
  })
  @get()
  static getDmb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmb",
  })
  @post("{id}")
  static createDmb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
