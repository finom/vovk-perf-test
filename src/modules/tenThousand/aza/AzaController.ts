import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aza")
export default class AzaController {
  @operation({
    summary: "Get Aza",
  })
  @get()
  static getAza = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aza",
  })
  @post("{id}")
  static createAza = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
