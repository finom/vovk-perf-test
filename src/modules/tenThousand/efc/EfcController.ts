import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efc")
export default class EfcController {
  @operation({
    summary: "Get Efc",
  })
  @get()
  static getEfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efc",
  })
  @post("{id}")
  static createEfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
