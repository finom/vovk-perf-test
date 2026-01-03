import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqos")
export default class AqoController {
  @operation({
    summary: "Get Aqos",
  })
  @get()
  static getAqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqo",
  })
  @post("{id}")
  static createAqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
