import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aygs")
export default class AygController {
  @operation({
    summary: "Get Aygs",
  })
  @get()
  static getAygs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayg",
  })
  @post("{id}")
  static createAyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
