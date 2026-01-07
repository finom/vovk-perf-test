import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcl")
export default class JclController {
  @operation({
    summary: "Get Jcl",
  })
  @get()
  static getJcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcl",
  })
  @post("{id}")
  static createJcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
