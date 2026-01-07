import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwi")
export default class FwiController {
  @operation({
    summary: "Get Fwi",
  })
  @get()
  static getFwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwi",
  })
  @post("{id}")
  static createFwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
