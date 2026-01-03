import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezks")
export default class EzkController {
  @operation({
    summary: "Get Ezks",
  })
  @get()
  static getEzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezk",
  })
  @post("{id}")
  static createEzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
