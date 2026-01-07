import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lek")
export default class LekController {
  @operation({
    summary: "Get Lek",
  })
  @get()
  static getLek = procedure({
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
