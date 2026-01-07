import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kje")
export default class KjeController {
  @operation({
    summary: "Get Kje",
  })
  @get()
  static getKje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kje",
  })
  @post("{id}")
  static createKje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
