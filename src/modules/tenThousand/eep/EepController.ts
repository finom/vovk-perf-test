import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eep")
export default class EepController {
  @operation({
    summary: "Get Eep",
  })
  @get()
  static getEep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eep",
  })
  @post("{id}")
  static createEep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
