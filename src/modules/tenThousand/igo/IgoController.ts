import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igo")
export default class IgoController {
  @operation({
    summary: "Get Igo",
  })
  @get()
  static getIgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Igo",
  })
  @post("{id}")
  static createIgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
