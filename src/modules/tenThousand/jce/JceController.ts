import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jces")
export default class JceController {
  @operation({
    summary: "Get Jces",
  })
  @get()
  static getJces = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jce",
  })
  @post("{id}")
  static createJce = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
