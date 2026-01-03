import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbbs")
export default class LbbController {
  @operation({
    summary: "Get Lbbs",
  })
  @get()
  static getLbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbb",
  })
  @post("{id}")
  static createLbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
