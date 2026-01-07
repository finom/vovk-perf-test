import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecd")
export default class EcdController {
  @operation({
    summary: "Get Ecd",
  })
  @get()
  static getEcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecd",
  })
  @post("{id}")
  static createEcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
