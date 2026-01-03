import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehos")
export default class EhoController {
  @operation({
    summary: "Get Ehos",
  })
  @get()
  static getEhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eho",
  })
  @post("{id}")
  static createEho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
