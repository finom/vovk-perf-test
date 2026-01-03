import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrds")
export default class JrdController {
  @operation({
    summary: "Get Jrds",
  })
  @get()
  static getJrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrd",
  })
  @post("{id}")
  static createJrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
