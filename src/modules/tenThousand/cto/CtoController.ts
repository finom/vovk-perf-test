import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctos")
export default class CtoController {
  @operation({
    summary: "Get Ctos",
  })
  @get()
  static getCtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cto",
  })
  @post("{id}")
  static createCto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
