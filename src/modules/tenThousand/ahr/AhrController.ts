import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahr")
export default class AhrController {
  @operation({
    summary: "Get Ahr",
  })
  @get()
  static getAhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahr",
  })
  @post("{id}")
  static createAhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
