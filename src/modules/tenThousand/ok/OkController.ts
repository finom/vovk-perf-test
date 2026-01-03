import { procedure, prefix, get, post, operation } from "vovk";

@prefix("oks")
export default class OkController {
  @operation({
    summary: "Get Oks",
  })
  @get()
  static getOks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ok",
  })
  @post("{id}")
  static createOk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
