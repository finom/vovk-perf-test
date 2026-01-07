import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erd")
export default class ErdController {
  @operation({
    summary: "Get Erd",
  })
  @get()
  static getErd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Erd",
  })
  @post("{id}")
  static createErd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
