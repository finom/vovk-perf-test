import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrd")
export default class JrdController {
  @operation({
    summary: "Get Jrd",
  })
  @get()
  static getJrd = procedure({
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
