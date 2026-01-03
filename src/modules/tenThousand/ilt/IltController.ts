import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilts")
export default class IltController {
  @operation({
    summary: "Get Ilts",
  })
  @get()
  static getIlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilt",
  })
  @post("{id}")
  static createIlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
