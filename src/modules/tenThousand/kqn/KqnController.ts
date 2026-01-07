import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqn")
export default class KqnController {
  @operation({
    summary: "Get Kqn",
  })
  @get()
  static getKqn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqn",
  })
  @post("{id}")
  static createKqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
