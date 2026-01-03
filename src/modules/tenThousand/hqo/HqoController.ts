import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqos")
export default class HqoController {
  @operation({
    summary: "Get Hqos",
  })
  @get()
  static getHqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqo",
  })
  @post("{id}")
  static createHqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
