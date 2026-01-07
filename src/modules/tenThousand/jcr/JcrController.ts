import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jcr")
export default class JcrController {
  @operation({
    summary: "Get Jcr",
  })
  @get()
  static getJcr = procedure({
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
