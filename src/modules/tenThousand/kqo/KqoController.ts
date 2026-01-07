import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqo")
export default class KqoController {
  @operation({
    summary: "Get Kqo",
  })
  @get()
  static getKqo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqo",
  })
  @post("{id}")
  static createKqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
