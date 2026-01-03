import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cqos")
export default class CqoController {
  @operation({
    summary: "Get Cqos",
  })
  @get()
  static getCqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cqo",
  })
  @post("{id}")
  static createCqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
