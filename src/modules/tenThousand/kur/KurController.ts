import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kur")
export default class KurController {
  @operation({
    summary: "Get Kur",
  })
  @get()
  static getKur = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kur",
  })
  @post("{id}")
  static createKur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
