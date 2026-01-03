import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agos")
export default class AgoController {
  @operation({
    summary: "Get Agos",
  })
  @get()
  static getAgos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ago",
  })
  @post("{id}")
  static createAgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
