import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcds")
export default class JcdController {
  @operation({
    summary: "Get Jcds",
  })
  @get()
  static getJcds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcd",
  })
  @post("{id}")
  static createJcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
