import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilw")
export default class IlwController {
  @operation({
    summary: "Get Ilw",
  })
  @get()
  static getIlw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilw",
  })
  @post("{id}")
  static createIlw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
