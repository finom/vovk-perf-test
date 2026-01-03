import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebas")
export default class EbaController {
  @operation({
    summary: "Get Ebas",
  })
  @get()
  static getEbas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eba",
  })
  @post("{id}")
  static createEba = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
