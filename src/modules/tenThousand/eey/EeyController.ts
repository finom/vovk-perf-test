import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeys")
export default class EeyController {
  @operation({
    summary: "Get Eeys",
  })
  @get()
  static getEeys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eey",
  })
  @post("{id}")
  static createEey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
