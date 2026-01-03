import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icus")
export default class IcuController {
  @operation({
    summary: "Get Icus",
  })
  @get()
  static getIcus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icu",
  })
  @post("{id}")
  static createIcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
