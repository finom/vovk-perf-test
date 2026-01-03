import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyns")
export default class IynController {
  @operation({
    summary: "Get Iyns",
  })
  @get()
  static getIyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iyn",
  })
  @post("{id}")
  static createIyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
