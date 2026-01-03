import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrbs")
export default class JrbController {
  @operation({
    summary: "Get Jrbs",
  })
  @get()
  static getJrbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrb",
  })
  @post("{id}")
  static createJrb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
