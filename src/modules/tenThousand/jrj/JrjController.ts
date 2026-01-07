import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrj")
export default class JrjController {
  @operation({
    summary: "Get Jrj",
  })
  @get()
  static getJrj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrj",
  })
  @post("{id}")
  static createJrj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
