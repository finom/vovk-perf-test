import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcrs")
export default class JcrController {
  @operation({
    summary: "Get Jcrs",
  })
  @get()
  static getJcrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jcr",
  })
  @post("{id}")
  static createJcr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
