import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epp")
export default class EppController {
  @operation({
    summary: "Get Epp",
  })
  @get()
  static getEpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epp",
  })
  @post("{id}")
  static createEpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
