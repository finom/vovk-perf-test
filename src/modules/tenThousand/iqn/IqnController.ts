import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqn")
export default class IqnController {
  @operation({
    summary: "Get Iqn",
  })
  @get()
  static getIqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqn",
  })
  @post("{id}")
  static createIqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
