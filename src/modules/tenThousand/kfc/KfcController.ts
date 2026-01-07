import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfc")
export default class KfcController {
  @operation({
    summary: "Get Kfc",
  })
  @get()
  static getKfc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfc",
  })
  @post("{id}")
  static createKfc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
