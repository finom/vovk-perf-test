import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iro")
export default class IroController {
  @operation({
    summary: "Get Iro",
  })
  @get()
  static getIro = procedure({
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
