import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feks")
export default class FekController {
  @operation({
    summary: "Get Feks",
  })
  @get()
  static getFeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fek",
  })
  @post("{id}")
  static createFek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
