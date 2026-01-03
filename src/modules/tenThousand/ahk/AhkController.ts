import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahks")
export default class AhkController {
  @operation({
    summary: "Get Ahks",
  })
  @get()
  static getAhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahk",
  })
  @post("{id}")
  static createAhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
