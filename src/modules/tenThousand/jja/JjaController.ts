import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjas")
export default class JjaController {
  @operation({
    summary: "Get Jjas",
  })
  @get()
  static getJjas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jja",
  })
  @post("{id}")
  static createJja = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
