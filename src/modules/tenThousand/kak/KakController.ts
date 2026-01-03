import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaks")
export default class KakController {
  @operation({
    summary: "Get Kaks",
  })
  @get()
  static getKaks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kak",
  })
  @post("{id}")
  static createKak = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
