import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lazs")
export default class LazController {
  @operation({
    summary: "Get Lazs",
  })
  @get()
  static getLazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Laz",
  })
  @post("{id}")
  static createLaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
