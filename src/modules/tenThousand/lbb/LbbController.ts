import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbb")
export default class LbbController {
  @operation({
    summary: "Get Lbb",
  })
  @get()
  static getLbb = procedure({
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
