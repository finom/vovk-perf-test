import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoa")
export default class EoaController {
  @operation({
    summary: "Get Eoa",
  })
  @get()
  static getEoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eoa",
  })
  @post("{id}")
  static createEoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
