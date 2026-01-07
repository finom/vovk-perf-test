import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrl")
export default class JrlController {
  @operation({
    summary: "Get Jrl",
  })
  @get()
  static getJrl = procedure({
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
