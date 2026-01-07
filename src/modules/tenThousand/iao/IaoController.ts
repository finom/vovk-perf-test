import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iao")
export default class IaoController {
  @operation({
    summary: "Get Iao",
  })
  @get()
  static getIao = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iao",
  })
  @post("{id}")
  static createIao = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
