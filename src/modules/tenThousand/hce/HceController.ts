import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hce")
export default class HceController {
  @operation({
    summary: "Get Hce",
  })
  @get()
  static getHce = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hce",
  })
  @post("{id}")
  static createHce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
