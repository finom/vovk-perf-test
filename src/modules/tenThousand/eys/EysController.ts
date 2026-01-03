import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eys")
export default class EysController {
  @operation({
    summary: "Get Eys",
  })
  @get()
  static getEys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eys",
  })
  @post("{id}")
  static createEys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
