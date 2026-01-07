import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ite")
export default class IteController {
  @operation({
    summary: "Get Ite",
  })
  @get()
  static getIte = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ite",
  })
  @post("{id}")
  static createIte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
