import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eny")
export default class EnyController {
  @operation({
    summary: "Get Eny",
  })
  @get()
  static getEny = procedure({
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
