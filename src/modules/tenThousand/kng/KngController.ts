import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kngs")
export default class KngController {
  @operation({
    summary: "Get Kngs",
  })
  @get()
  static getKngs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kng",
  })
  @post("{id}")
  static createKng = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
