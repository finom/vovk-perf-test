import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eox")
export default class EoxController {
  @operation({
    summary: "Get Eox",
  })
  @get()
  static getEox = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eox",
  })
  @post("{id}")
  static createEox = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
