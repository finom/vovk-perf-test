import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsns")
export default class JsnController {
  @operation({
    summary: "Get Jsns",
  })
  @get()
  static getJsns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsn",
  })
  @post("{id}")
  static createJsn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
