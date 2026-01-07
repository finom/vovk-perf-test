import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jma")
export default class JmaController {
  @operation({
    summary: "Get Jma",
  })
  @get()
  static getJma = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jma",
  })
  @post("{id}")
  static createJma = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
