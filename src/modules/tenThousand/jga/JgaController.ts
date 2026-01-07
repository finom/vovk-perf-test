import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jga")
export default class JgaController {
  @operation({
    summary: "Get Jga",
  })
  @get()
  static getJga = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jga",
  })
  @post("{id}")
  static createJga = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
