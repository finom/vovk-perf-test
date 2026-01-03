import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeos")
export default class JeoController {
  @operation({
    summary: "Get Jeos",
  })
  @get()
  static getJeos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeo",
  })
  @post("{id}")
  static createJeo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
