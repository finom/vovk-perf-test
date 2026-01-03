import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmes")
export default class JmeController {
  @operation({
    summary: "Get Jmes",
  })
  @get()
  static getJmes = procedure({
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
