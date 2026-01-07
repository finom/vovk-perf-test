import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqo")
export default class AqoController {
  @operation({
    summary: "Get Aqo",
  })
  @get()
  static getAqo = procedure({
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
