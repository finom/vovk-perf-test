import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ika")
export default class IkaController {
  @operation({
    summary: "Get Ika",
  })
  @get()
  static getIka = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ika",
  })
  @post("{id}")
  static createIka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
