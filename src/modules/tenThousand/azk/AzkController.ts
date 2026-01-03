import { procedure, prefix, get, post, operation } from "vovk";

@prefix("azks")
export default class AzkController {
  @operation({
    summary: "Get Azks",
  })
  @get()
  static getAzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Azk",
  })
  @post("{id}")
  static createAzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
