import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kahs")
export default class KahController {
  @operation({
    summary: "Get Kahs",
  })
  @get()
  static getKahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kah",
  })
  @post("{id}")
  static createKah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
