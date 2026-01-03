import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emks")
export default class EmkController {
  @operation({
    summary: "Get Emks",
  })
  @get()
  static getEmks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emk",
  })
  @post("{id}")
  static createEmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
