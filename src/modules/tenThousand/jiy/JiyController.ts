import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiy")
export default class JiyController {
  @operation({
    summary: "Get Jiy",
  })
  @get()
  static getJiy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiy",
  })
  @post("{id}")
  static createJiy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
