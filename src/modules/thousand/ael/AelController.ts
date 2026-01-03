import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aels")
export default class AelController {
  @operation({
    summary: "Get Aels",
  })
  @get()
  static getAels = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ael",
  })
  @post("{id}")
  static createAel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
