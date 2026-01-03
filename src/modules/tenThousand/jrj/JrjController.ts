import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrjs")
export default class JrjController {
  @operation({
    summary: "Get Jrjs",
  })
  @get()
  static getJrjs = procedure({
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
