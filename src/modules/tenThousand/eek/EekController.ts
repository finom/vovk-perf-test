import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eek")
export default class EekController {
  @operation({
    summary: "Get Eek",
  })
  @get()
  static getEek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eek",
  })
  @post("{id}")
  static createEek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
