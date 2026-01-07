import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqn")
export default class LqnController {
  @operation({
    summary: "Get Lqn",
  })
  @get()
  static getLqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqn",
  })
  @post("{id}")
  static createLqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
