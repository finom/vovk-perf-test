import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwds")
export default class KwdController {
  @operation({
    summary: "Get Kwds",
  })
  @get()
  static getKwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kwd",
  })
  @post("{id}")
  static createKwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
