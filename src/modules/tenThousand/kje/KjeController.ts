import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjes")
export default class KjeController {
  @operation({
    summary: "Get Kjes",
  })
  @get()
  static getKjes = procedure({
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
