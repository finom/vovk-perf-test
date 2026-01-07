import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiy")
export default class FiyController {
  @operation({
    summary: "Get Fiy",
  })
  @get()
  static getFiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiy",
  })
  @post("{id}")
  static createFiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
