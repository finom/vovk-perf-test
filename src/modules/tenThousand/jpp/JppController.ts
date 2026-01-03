import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jpps")
export default class JppController {
  @operation({
    summary: "Get Jpps",
  })
  @get()
  static getJpps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jpp",
  })
  @post("{id}")
  static createJpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
