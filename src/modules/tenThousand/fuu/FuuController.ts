import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuus")
export default class FuuController {
  @operation({
    summary: "Get Fuus",
  })
  @get()
  static getFuus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuu",
  })
  @post("{id}")
  static createFuu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
