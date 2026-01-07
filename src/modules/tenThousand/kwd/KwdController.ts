import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwd")
export default class KwdController {
  @operation({
    summary: "Get Kwd",
  })
  @get()
  static getKwd = procedure({
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
