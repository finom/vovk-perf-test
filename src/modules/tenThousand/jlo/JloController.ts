import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlos")
export default class JloController {
  @operation({
    summary: "Get Jlos",
  })
  @get()
  static getJlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlo",
  })
  @post("{id}")
  static createJlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
