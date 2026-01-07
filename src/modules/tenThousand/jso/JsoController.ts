import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jso")
export default class JsoController {
  @operation({
    summary: "Get Jso",
  })
  @get()
  static getJso = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jso",
  })
  @post("{id}")
  static createJso = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
