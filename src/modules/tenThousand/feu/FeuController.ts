import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feu")
export default class FeuController {
  @operation({
    summary: "Get Feu",
  })
  @get()
  static getFeu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Feu",
  })
  @post("{id}")
  static createFeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
