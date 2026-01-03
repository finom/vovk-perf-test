import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtos")
export default class JtoController {
  @operation({
    summary: "Get Jtos",
  })
  @get()
  static getJtos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jto",
  })
  @post("{id}")
  static createJto = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
