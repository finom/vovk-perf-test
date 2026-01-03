import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilks")
export default class IlkController {
  @operation({
    summary: "Get Ilks",
  })
  @get()
  static getIlks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilk",
  })
  @post("{id}")
  static createIlk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
