import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwks")
export default class KwkController {
  @operation({
    summary: "Get Kwks",
  })
  @get()
  static getKwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwk",
  })
  @post("{id}")
  static createKwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
