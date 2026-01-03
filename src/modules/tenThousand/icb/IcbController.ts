import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icbs")
export default class IcbController {
  @operation({
    summary: "Get Icbs",
  })
  @get()
  static getIcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Icb",
  })
  @post("{id}")
  static createIcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
