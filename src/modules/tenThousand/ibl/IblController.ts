import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibls")
export default class IblController {
  @operation({
    summary: "Get Ibls",
  })
  @get()
  static getIbls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ibl",
  })
  @post("{id}")
  static createIbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
