import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jto")
export default class JtoController {
  @operation({
    summary: "Get Jto",
  })
  @get()
  static getJto = procedure({
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
