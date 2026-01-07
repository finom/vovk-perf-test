import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrm")
export default class JrmController {
  @operation({
    summary: "Get Jrm",
  })
  @get()
  static getJrm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrm",
  })
  @post("{id}")
  static createJrm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
