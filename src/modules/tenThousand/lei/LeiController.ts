import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lei")
export default class LeiController {
  @operation({
    summary: "Get Lei",
  })
  @get()
  static getLei = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lei",
  })
  @post("{id}")
  static createLei = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
