import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioys")
export default class IoyController {
  @operation({
    summary: "Get Ioys",
  })
  @get()
  static getIoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ioy",
  })
  @post("{id}")
  static createIoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
