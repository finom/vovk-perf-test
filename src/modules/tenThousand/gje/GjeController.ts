import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gje")
export default class GjeController {
  @operation({
    summary: "Get Gje",
  })
  @get()
  static getGje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gje",
  })
  @post("{id}")
  static createGje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
