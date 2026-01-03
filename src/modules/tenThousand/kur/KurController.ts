import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kurs")
export default class KurController {
  @operation({
    summary: "Get Kurs",
  })
  @get()
  static getKurs = procedure({
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
