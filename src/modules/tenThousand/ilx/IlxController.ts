import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilxes")
export default class IlxController {
  @operation({
    summary: "Get Ilxes",
  })
  @get()
  static getIlxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilx",
  })
  @post("{id}")
  static createIlx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
