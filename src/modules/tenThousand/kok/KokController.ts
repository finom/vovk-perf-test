import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kok")
export default class KokController {
  @operation({
    summary: "Get Kok",
  })
  @get()
  static getKok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kok",
  })
  @post("{id}")
  static createKok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
