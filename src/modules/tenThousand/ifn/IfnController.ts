import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifn")
export default class IfnController {
  @operation({
    summary: "Get Ifn",
  })
  @get()
  static getIfn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifn",
  })
  @post("{id}")
  static createIfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
