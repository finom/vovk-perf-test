import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kne")
export default class KneController {
  @operation({
    summary: "Get Kne",
  })
  @get()
  static getKne = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kne",
  })
  @post("{id}")
  static createKne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
