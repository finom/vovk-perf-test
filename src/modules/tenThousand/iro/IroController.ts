import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iros")
export default class IroController {
  @operation({
    summary: "Get Iros",
  })
  @get()
  static getIros = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iro",
  })
  @post("{id}")
  static createIro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
