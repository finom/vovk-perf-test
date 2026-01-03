import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvos")
export default class GvoController {
  @operation({
    summary: "Get Gvos",
  })
  @get()
  static getGvos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gvo",
  })
  @post("{id}")
  static createGvo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
