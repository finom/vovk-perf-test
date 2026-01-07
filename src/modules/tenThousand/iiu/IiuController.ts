import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iiu")
export default class IiuController {
  @operation({
    summary: "Get Iiu",
  })
  @get()
  static getIiu = procedure({
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
