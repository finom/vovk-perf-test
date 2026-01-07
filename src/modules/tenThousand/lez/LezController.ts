import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lez")
export default class LezController {
  @operation({
    summary: "Get Lez",
  })
  @get()
  static getLez = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lez",
  })
  @post("{id}")
  static createLez = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
