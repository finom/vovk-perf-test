import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eiu")
export default class EiuController {
  @operation({
    summary: "Get Eiu",
  })
  @get()
  static getEiu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eiu",
  })
  @post("{id}")
  static createEiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
