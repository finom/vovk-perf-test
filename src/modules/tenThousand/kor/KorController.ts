import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kors")
export default class KorController {
  @operation({
    summary: "Get Kors",
  })
  @get()
  static getKors = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kor",
  })
  @post("{id}")
  static createKor = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
