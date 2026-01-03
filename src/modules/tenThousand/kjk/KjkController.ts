import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjks")
export default class KjkController {
  @operation({
    summary: "Get Kjks",
  })
  @get()
  static getKjks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kjk",
  })
  @post("{id}")
  static createKjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
