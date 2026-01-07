import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgi")
export default class CgiController {
  @operation({
    summary: "Get Cgi",
  })
  @get()
  static getCgi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgi",
  })
  @post("{id}")
  static createCgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
