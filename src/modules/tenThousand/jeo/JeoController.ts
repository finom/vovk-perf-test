import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jeo")
export default class JeoController {
  @operation({
    summary: "Get Jeo",
  })
  @get()
  static getJeo = procedure({
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
