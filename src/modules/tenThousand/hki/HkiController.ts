import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hki")
export default class HkiController {
  @operation({
    summary: "Get Hki",
  })
  @get()
  static getHki = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hki",
  })
  @post("{id}")
  static createHki = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
