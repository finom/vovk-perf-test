import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jca")
export default class JcaController {
  @operation({
    summary: "Get Jca",
  })
  @get()
  static getJca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jca",
  })
  @post("{id}")
  static createJca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
