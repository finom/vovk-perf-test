import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyn")
export default class DynController {
  @operation({
    summary: "Get Dyn",
  })
  @get()
  static getDyn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyn",
  })
  @post("{id}")
  static createDyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
