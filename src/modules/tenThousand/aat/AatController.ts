import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aat")
export default class AatController {
  @operation({
    summary: "Get Aat",
  })
  @get()
  static getAat = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aat",
  })
  @post("{id}")
  static createAat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
