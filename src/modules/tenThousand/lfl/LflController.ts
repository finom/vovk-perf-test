import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfl")
export default class LflController {
  @operation({
    summary: "Get Lfl",
  })
  @get()
  static getLfl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfl",
  })
  @post("{id}")
  static createLfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
