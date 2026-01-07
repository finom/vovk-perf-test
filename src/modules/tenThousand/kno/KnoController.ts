import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kno")
export default class KnoController {
  @operation({
    summary: "Get Kno",
  })
  @get()
  static getKno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kno",
  })
  @post("{id}")
  static createKno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
