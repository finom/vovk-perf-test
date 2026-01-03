import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrls")
export default class JrlController {
  @operation({
    summary: "Get Jrls",
  })
  @get()
  static getJrls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrl",
  })
  @post("{id}")
  static createJrl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
