import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqos")
export default class DqoController {
  @operation({
    summary: "Get Dqos",
  })
  @get()
  static getDqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqo",
  })
  @post("{id}")
  static createDqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
