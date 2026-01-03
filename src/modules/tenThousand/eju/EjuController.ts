import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejus")
export default class EjuController {
  @operation({
    summary: "Get Ejus",
  })
  @get()
  static getEjus = procedure({
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
