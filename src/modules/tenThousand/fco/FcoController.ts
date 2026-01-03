import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcos")
export default class FcoController {
  @operation({
    summary: "Get Fcos",
  })
  @get()
  static getFcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fco",
  })
  @post("{id}")
  static createFco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
