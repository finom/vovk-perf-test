import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecds")
export default class EcdController {
  @operation({
    summary: "Get Ecds",
  })
  @get()
  static getEcds = procedure({
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
