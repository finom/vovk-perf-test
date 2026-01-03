import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaqs")
export default class KaqController {
  @operation({
    summary: "Get Kaqs",
  })
  @get()
  static getKaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kaq",
  })
  @post("{id}")
  static createKaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
