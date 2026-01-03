import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iius")
export default class IiuController {
  @operation({
    summary: "Get Iius",
  })
  @get()
  static getIius = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iiu",
  })
  @post("{id}")
  static createIiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
