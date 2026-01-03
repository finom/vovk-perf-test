import { procedure, prefix, get, post, operation } from "vovk";

@prefix("leks")
export default class LekController {
  @operation({
    summary: "Get Leks",
  })
  @get()
  static getLeks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lek",
  })
  @post("{id}")
  static createLek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
