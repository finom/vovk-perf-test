import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqas")
export default class IqaController {
  @operation({
    summary: "Get Iqas",
  })
  @get()
  static getIqas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqa",
  })
  @post("{id}")
  static createIqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
