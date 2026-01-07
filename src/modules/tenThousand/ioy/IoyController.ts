import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ioy")
export default class IoyController {
  @operation({
    summary: "Get Ioy",
  })
  @get()
  static getIoy = procedure({
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
