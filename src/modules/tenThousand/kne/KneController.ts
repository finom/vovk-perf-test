import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knes")
export default class KneController {
  @operation({
    summary: "Get Knes",
  })
  @get()
  static getKnes = procedure({
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
