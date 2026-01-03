import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kius")
export default class KiuController {
  @operation({
    summary: "Get Kius",
  })
  @get()
  static getKius = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kiu",
  })
  @post("{id}")
  static createKiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
