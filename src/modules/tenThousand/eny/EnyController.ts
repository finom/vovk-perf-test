import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enies")
export default class EnyController {
  @operation({
    summary: "Get Enies",
  })
  @get()
  static getEnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eny",
  })
  @post("{id}")
  static createEny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
