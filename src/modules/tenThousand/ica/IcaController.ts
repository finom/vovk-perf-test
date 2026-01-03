import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icas")
export default class IcaController {
  @operation({
    summary: "Get Icas",
  })
  @get()
  static getIcas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ica",
  })
  @post("{id}")
  static createIca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
