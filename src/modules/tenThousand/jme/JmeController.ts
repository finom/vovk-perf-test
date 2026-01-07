import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jme")
export default class JmeController {
  @operation({
    summary: "Get Jme",
  })
  @get()
  static getJme = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jme",
  })
  @post("{id}")
  static createJme = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
