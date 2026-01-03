import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbes")
export default class JbeController {
  @operation({
    summary: "Get Jbes",
  })
  @get()
  static getJbes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbe",
  })
  @post("{id}")
  static createJbe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
