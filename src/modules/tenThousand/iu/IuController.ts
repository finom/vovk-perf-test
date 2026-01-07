import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iu")
export default class IuController {
  @operation({
    summary: "Get Iu",
  })
  @get()
  static getIu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iu",
  })
  @post("{id}")
  static createIu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
