import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jab")
export default class JabController {
  @operation({
    summary: "Get Jab",
  })
  @get()
  static getJab = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jab",
  })
  @post("{id}")
  static createJab = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
