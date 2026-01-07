import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eju")
export default class EjuController {
  @operation({
    summary: "Get Eju",
  })
  @get()
  static getEju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eju",
  })
  @post("{id}")
  static createEju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
