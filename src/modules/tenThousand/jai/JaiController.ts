import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jais")
export default class JaiController {
  @operation({
    summary: "Get Jais",
  })
  @get()
  static getJais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jai",
  })
  @post("{id}")
  static createJai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
