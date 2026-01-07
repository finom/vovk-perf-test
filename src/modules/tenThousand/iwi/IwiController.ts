import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwi")
export default class IwiController {
  @operation({
    summary: "Get Iwi",
  })
  @get()
  static getIwi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iwi",
  })
  @post("{id}")
  static createIwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
