import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqo")
export default class IqoController {
  @operation({
    summary: "Get Iqo",
  })
  @get()
  static getIqo = procedure({
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
