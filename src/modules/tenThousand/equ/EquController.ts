import { procedure, prefix, get, post, operation } from "vovk";

@prefix("equ")
export default class EquController {
  @operation({
    summary: "Get Equ",
  })
  @get()
  static getEqu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Equ",
  })
  @post("{id}")
  static createEqu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
