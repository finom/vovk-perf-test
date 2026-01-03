import { procedure, prefix, get, post, operation } from "vovk";

@prefix("keus")
export default class KeuController {
  @operation({
    summary: "Get Keus",
  })
  @get()
  static getKeus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Keu",
  })
  @post("{id}")
  static createKeu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
