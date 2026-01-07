import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqo")
export default class DqoController {
  @operation({
    summary: "Get Dqo",
  })
  @get()
  static getDqo = procedure({
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
