import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifo")
export default class IfoController {
  @operation({
    summary: "Get Ifo",
  })
  @get()
  static getIfo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifo",
  })
  @post("{id}")
  static createIfo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
