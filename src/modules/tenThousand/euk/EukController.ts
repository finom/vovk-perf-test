import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euk")
export default class EukController {
  @operation({
    summary: "Get Euk",
  })
  @get()
  static getEuk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euk",
  })
  @post("{id}")
  static createEuk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
