import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqn")
export default class DqnController {
  @operation({
    summary: "Get Dqn",
  })
  @get()
  static getDqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dqn",
  })
  @post("{id}")
  static createDqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
