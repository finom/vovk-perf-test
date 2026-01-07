import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhr")
export default class JhrController {
  @operation({
    summary: "Get Jhr",
  })
  @get()
  static getJhr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhr",
  })
  @post("{id}")
  static createJhr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
