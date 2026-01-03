import { procedure, prefix, get, post, operation } from "vovk";

@prefix("koqs")
export default class KoqController {
  @operation({
    summary: "Get Koqs",
  })
  @get()
  static getKoqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koq",
  })
  @post("{id}")
  static createKoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
