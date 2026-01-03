import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iaos")
export default class IaoController {
  @operation({
    summary: "Get Iaos",
  })
  @get()
  static getIaos = procedure({
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
