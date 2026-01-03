import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqos")
export default class IqoController {
  @operation({
    summary: "Get Iqos",
  })
  @get()
  static getIqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqo",
  })
  @post("{id}")
  static createIqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
