import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emis")
export default class EmiController {
  @operation({
    summary: "Get Emis",
  })
  @get()
  static getEmis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emi",
  })
  @post("{id}")
  static createEmi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
