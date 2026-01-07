import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lht")
export default class LhtController {
  @operation({
    summary: "Get Lht",
  })
  @get()
  static getLht = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lht",
  })
  @post("{id}")
  static createLht = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
