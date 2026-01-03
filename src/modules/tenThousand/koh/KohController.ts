import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kohs")
export default class KohController {
  @operation({
    summary: "Get Kohs",
  })
  @get()
  static getKohs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koh",
  })
  @post("{id}")
  static createKoh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
