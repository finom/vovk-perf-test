import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgs")
export default class JgsController {
  @operation({
    summary: "Get Jgs",
  })
  @get()
  static getJgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgs",
  })
  @post("{id}")
  static createJgs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
