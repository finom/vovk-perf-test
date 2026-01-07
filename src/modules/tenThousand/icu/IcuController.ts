import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icu")
export default class IcuController {
  @operation({
    summary: "Get Icu",
  })
  @get()
  static getIcu = procedure({
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
