import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikas")
export default class IkaController {
  @operation({
    summary: "Get Ikas",
  })
  @get()
  static getIkas = procedure({
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
