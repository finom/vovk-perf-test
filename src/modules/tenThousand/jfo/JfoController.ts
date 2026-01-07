import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfo")
export default class JfoController {
  @operation({
    summary: "Get Jfo",
  })
  @get()
  static getJfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfo",
  })
  @post("{id}")
  static createJfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
