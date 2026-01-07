import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aut")
export default class AutController {
  @operation({
    summary: "Get Aut",
  })
  @get()
  static getAut = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aut",
  })
  @post("{id}")
  static createAut = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
