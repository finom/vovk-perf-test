import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrgs")
export default class JrgController {
  @operation({
    summary: "Get Jrgs",
  })
  @get()
  static getJrgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrg",
  })
  @post("{id}")
  static createJrg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
