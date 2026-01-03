import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ites")
export default class IteController {
  @operation({
    summary: "Get Ites",
  })
  @get()
  static getItes = procedure({
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
