import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euh")
export default class EuhController {
  @operation({
    summary: "Get Euh",
  })
  @get()
  static getEuh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euh",
  })
  @post("{id}")
  static createEuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
