import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jles")
export default class JleController {
  @operation({
    summary: "Get Jles",
  })
  @get()
  static getJles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jle",
  })
  @post("{id}")
  static createJle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
